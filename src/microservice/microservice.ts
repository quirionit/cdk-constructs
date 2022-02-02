import { HttpIamAuthorizer } from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { GoFunctionProps } from '@aws-cdk/aws-lambda-go-alpha';
import { EventBus, Rule } from 'aws-cdk-lib/aws-events';
import { SqsQueue } from 'aws-cdk-lib/aws-events-targets';
import { AnyPrincipal } from 'aws-cdk-lib/aws-iam';
import { Function, FunctionOptions } from 'aws-cdk-lib/aws-lambda';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs/lib/function';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { BaseApi } from '../api';
import { SingleTableDatastore } from '../dynamodb';
import { GoLambda, NodeJsLambda } from '../lambda';
import { Swagger } from '../swagger';
import { capitalizeFirstLetter, filterSpecialCharacters, isType } from '../utils';
import { MicroserviceConfiguration } from './microservice-configuration';
import { NewLambdaConfiguration } from './new-lambda-configuration';

/**
 * Serverless microservice based on lambda - functions.
 */
export class Microservice extends Construct {

  api?: BaseApi;

  lambdas: Record<string, Function>;

  dataStore?: SingleTableDatastore;

  eventStore?: SingleTableDatastore;

  private readonly lambdaEnvironment: Record<string, string>;

  constructor(scope: Construct, id: string, props: MicroserviceConfiguration) {
    super(scope, id);

    const {
      dataStore,
      eventStore,
      api,
      domain,
      context,
    } = props;

    // initialise empty lambdas
    this.lambdas = {};

    // initialise empty env - variables
    this.lambdaEnvironment = {};

    if (api) {
      if (api.public) {
        this.api = new BaseApi(this, 'BaseApi', {
          description: `Http - gateway for ${domain}${context} - Microservice.`,
        });
      } else {
        this.api = new BaseApi(this, 'BaseApi', {
          description: `Http - gateway for ${domain}${context} - Microservice.`,
          defaultAuthorizer: new HttpIamAuthorizer(),
        });
      }

      if (api.swagger) {
        new Swagger(this, `${id}Swagger`, api.swagger);
      }
    }

    if (dataStore) {
      this.dataStore = new SingleTableDatastore(
        this,
        `${this.node.id}DataStore`,
        { tableName: `${this.node.id}DataStore` });
      this.lambdaEnvironment.DATA_STORE_TABLE = this.dataStore?.tableName;
    }

    if (eventStore) {
      this.eventStore = new SingleTableDatastore(
        this,
        `${this.node.id}EventStore`,
        { tableName: `${this.node.id}EventStore` });
      this.lambdaEnvironment.EVENT_STORE_TABLE = this.eventStore?.tableName;
    }
  }

  /**
   * Add new Lambda to microservice
   * @param props MicroserviceNewLambdaProps
   */
  newLambda(props: NewLambdaConfiguration<FunctionOptions>): Function {
    const {
      type,
      route,
      path,
      queue,
      lambdaProps,
    } = props;

    if (route && queue) {
      throw new Error('Can´t be source for route and queue concurrently');
    }

    const name = `${this.node.id}_${path
      .replace('apps', '')
      .split(/[^a-zA-Z0-9]/g)
      .map((part) => capitalizeFirstLetter(part))
      .join('')}`;

    switch (type) {
      case 'Nodejs': {
        if (lambdaProps?.functionProps) {
          if (!isType<GoFunctionProps>(lambdaProps?.functionProps)) {
            throw new Error(`Not supported lambda type but was ${typeof props.lambdaProps}`);
          }
        }
        const functionProps = lambdaProps?.functionProps as NodejsFunctionProps;
        this.lambdas[name] = new NodeJsLambda(this, name, {
          ...lambdaProps,
          functionProps: {
            functionName: name,
            entry: path,
            memorySize: 1024,
            ...lambdaProps?.functionProps,
            environment: { ...this.lambdaEnvironment, ...functionProps?.environment },
          },
        });
        break;
      }
      case 'Go': {
        if (lambdaProps?.functionProps) {
          if (!isType<GoFunctionProps>(lambdaProps?.functionProps)) {
            throw new Error(`Not supported lambda type but was ${typeof props.lambdaProps}`);
          }
        }
        const functionProps = lambdaProps?.functionProps as unknown as GoFunctionProps;
        this.lambdas[name] = new GoLambda(this, name, {
          ...lambdaProps,
          functionProps: {
            functionName: name,
            entry: path,
            memorySize: 1024,
            ...lambdaProps,
            environment: { ...this.lambdaEnvironment, ...functionProps?.environment },
          },
        });
        break;
      }
      default: {
        throw new Error(`Not supported lambda type but was ${props.lambdaProps}`);
      }
    }

    if (queue?.busName) {
      const eventBus = EventBus.fromEventBusName(this, `${name}_EventBus`, queue.busName);
      const rule = new Rule(this, `${name}_EventBusSubscriptionRule`, {
        description: `Subscription to event bus for ${this.node.id}`,
        ruleName: `${name}_Rule`,
        eventPattern: props.queue?.eventPattern,
        schedule: props.queue?.schedule,
        eventBus: eventBus,
      });
      const dlq = new Queue(this, `${name}_QueueDlq`, {
        queueName: `${name}QueueDlq`,
      });
      const queueSubscription = new Queue(this, `${name}_Queue`, {
        queueName: `${name}Queue`,
        deadLetterQueue: {
          queue: dlq,
          maxReceiveCount: 1,
        },
      });
      this.lambdas[name].addEventSource(new SqsEventSource(queueSubscription));
      rule.addTarget(new SqsQueue(queueSubscription));
    }

    if (this.api && route) {
      const routes = this.api?.addRoutes({
        path: route.path,
        methods: [route.method],
        integration: new HttpLambdaIntegration(
          `LambdaIntegration${filterSpecialCharacters(route.path)}`,
          this.lambdas[name],
        ),
        authorizer: route.authorizer,
      });
      if (this.api.authorizer) {
        routes[0].grantInvoke(new AnyPrincipal());
      }
    }

    return this.lambdas[name];
  }
}
