import { HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
import { IHttpRouteAuthorizer } from '@aws-cdk/aws-apigatewayv2-alpha/lib/http/authorizer';

export interface RouteConfiguration {
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