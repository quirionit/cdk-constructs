import { HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
import { IHttpRouteAuthorizer } from '@aws-cdk/aws-apigatewayv2-alpha/lib/http/authorizer';
import { HttpIamAuthorizer } from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';
import { Table } from 'aws-cdk-lib/aws-dynamodb';
import { EventBus, Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { SqsQueue } from 'aws-cdk-lib/aws-events-targets';
import { EventPattern } from 'aws-cdk-lib/aws-events/lib/event-pattern';
import { AnyPrincipal } from 'aws-cdk-lib/aws-iam';
import { SqsEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { capitalizeFirstLetter } from '../utils';
import { BaseApi } from './base-api';
import { BaseLambda, BaseLambdaProps, FunctionType } from './base-lambda';
import { Swagger, SwaggerProps } from './swagger';
import { SingleTableDatastore } from './table';

export interface RouteProps {
  /**
   * Path to lambda function
   */
  readonly path: string;

  /**
   * Http method for route
   */
  readonly method: HttpMethod;

  /**
   * Optional authorizer
   */
  readonly authorizer?: IHttpRouteAuthorizer;
}

export interface QueueProps {
  /**
   * Name of event bus
   */
  readonly busName: string;

  /**
   * Configure a pattern to filter incoming events
   * Read more here:
   * https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html
   * https://docs.aws.amazon.com/cdk/api/v2//docs/aws-cdk-lib.aws_events.EventPattern.html
   *
   * @example
   *   eventPattern: {
   *     source: ['aws.ec2'],
   *   },
   */
  readonly eventPattern?: EventPattern;

  /**
   * Configure a schedule to run this lambda
   */
  readonly schedule?: Schedule;
}

export interface ApiProps {
  /**
   * Should it be public (or internal use only).
   */
  readonly public: boolean;

  /**
   * Should create and publish swagger documentation.
   */
  readonly swagger?: SwaggerProps;
}

export interface MicroserviceProps {
  /**
   * Domain (according to domain model)
   */
  readonly domain: string;

  /**
   * Context the ms is implementing
   */
  readonly context: string;

  /**
   * Should create dynamo data store
   */
  readonly dataStore: boolean;

  /**
   * Should create event store
   */
  readonly eventStore: boolean;

  /**
   * Should create an api gateway for the microservice
   * default: undefined
   */
  readonly api?: ApiProps;
}

export interface MicroserviceNewLambdaProps {
  /**
   * Path to lambda
   */
  readonly path: string;

  /**
   * Should be subscribed to queue
   */
  readonly queue?: QueueProps;

  /**
   * Hand in extra lambda props
   */
  readonly lambdaProps?: BaseLambdaProps;

  /**
   * Route configuration for api lambdas
   * @example
   * route: {
   *     path: '/hello-world',
   *     method: HttpMethod.GET
   * },
   */
  readonly route?: RouteProps;
}

/**
 * A principal representing all AWS identities in all accounts.
 */
declare const principal: AnyPrincipal;

export class Microservice extends Construct {

  api?: BaseApi;

  lambdas: Record<string, BaseLambda>;

  dataStore?: Table;

  eventStore?: Table;

  private readonly lambdaEnvironment: Record<string, string>;

  constructor(scope: Construct, id: string, props: MicroserviceProps) {
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
        this.api = new BaseApi(this, `${id}BaseApi`, {
          descriptions: `Http - gateway for ${domain}${context} - Microservice.`,
        });
      } else {
        this.api = new BaseApi(this, `${id}BaseApi`, {
          descriptions: `Http - gateway for ${domain}${context} - Microservice.`,
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
        { tableName: `${this.node.id}DataStore` })
        .table;
      this.lambdaEnvironment.DATA_STORE_TABLE = this.dataStore?.tableName;
    }

    if (eventStore) {
      this.eventStore = new SingleTableDatastore(
        this,
        `${this.node.id}EventStore`,
        { tableName: `${this.node.id}EventStore` })
        .table;
      this.lambdaEnvironment.EVENT_STORE_TABLE = this.eventStore?.tableName;
    }
  }

  /**
     * Add new Lambda to microservice
     * @param props MicroserviceNewLambdaProps
     */
  newLambda(props: MicroserviceNewLambdaProps): Microservice {
    const {
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

    const lambda = new BaseLambda(this, name, {
      ...lambdaProps,
      functionType: FunctionType.GO,
      name,
      path,
      args: {
        memorySize: 1024,
        ...lambdaProps?.args,
        environment: { ...this.lambdaEnvironment, ...lambdaProps?.args?.environment },
      },
    });

    const functionName = lambda.function.functionName;

    this.lambdas[functionName] = lambda;

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
      lambda.function.addEventSource(new SqsEventSource(queueSubscription));
      rule.addTarget(new SqsQueue(queueSubscription));
    }

    if (this.api && route) {
      const routes = this.api?.newRoute({
        path: route.path,
        method: route.method,
        func: lambda.function,
        authorizer: route.authorizer,
      });
      if (this.api.authorizer) {
        routes[0].grantInvoke(principal);
      }
    }

    return this;
  }
}
