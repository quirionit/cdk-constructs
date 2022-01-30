import { CorsHttpMethod, HttpApi, HttpMethod, HttpRoute, HttpStage } from '@aws-cdk/aws-apigatewayv2-alpha';
import { AddRoutesOptions } from '@aws-cdk/aws-apigatewayv2-alpha/lib/http/api';
import { IHttpRouteAuthorizer } from '@aws-cdk/aws-apigatewayv2-alpha/lib/http/authorizer';
import { HttpRouteIntegration } from '@aws-cdk/aws-apigatewayv2-alpha/lib/http/integration';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { Duration } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { capitalizeFirstLetter } from '../utils';

export interface BaseApiProps {
  /**
   * Description of api
   */
  readonly descriptions?: string;

  /**
   * Default authorizer for all routes
   */
  readonly defaultAuthorizer?: IHttpRouteAuthorizer;
}

interface PartialAddRoutesOptions extends Partial<AddRoutesOptions> {}

export interface NewRouteProps extends PartialAddRoutesOptions {
  /**
   * Http - Method of path / rest - call.
   *
   * @example
   * import { HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
   * method: HttpMethod.GET
   */
  readonly method: HttpMethod;

  /**
   * Provide a lambda - function as a shortcut for providing an integration.
   */
  readonly func?: lambda.Function;
}

export class BaseApi extends Construct {

  api: HttpApi;

  authorizer?: IHttpRouteAuthorizer;

  constructor(scope: Construct, id: string, props: BaseApiProps) {
    super(scope, id);
    this.authorizer = props.defaultAuthorizer;
    this.api = new HttpApi(this, `${id}_HttpApi`, {
      apiName: `${id}HttpApi`,
      description: props.descriptions,
      corsPreflight: {
        allowHeaders: ['Authorization', 'content-type', '*'],
        allowMethods: [
          CorsHttpMethod.GET,
          CorsHttpMethod.HEAD,
          CorsHttpMethod.OPTIONS,
          CorsHttpMethod.POST,
        ],
        allowOrigins: ['*'],
        maxAge: Duration.days(10),
      },
    });
    new HttpStage(this, `${id}_Stage`, {
      httpApi: this.api,
      stageName: 'v1',
    });
  }

  newRoute(props: NewRouteProps): HttpRoute[] {
    const {
      path,
      method,
      func,
      integration,
    } = props;

    if (!path) {
      throw Error('Path must be provided');
    }

    const name = `${this.node.id}_${path
      .split(/[^a-zA-Z0-9]/g)
      .map((part) => capitalizeFirstLetter(part))
      .join('')}`;

    if (!func && !integration) {
      throw Error('Either a function (lambda) or another integration must be provided');
    }

    return this.api.addRoutes({
      ...props,
      path,
      methods: [method],
      integration: <HttpRouteIntegration>(func ? new HttpLambdaIntegration(name, func) : integration),
    });
  }
}
