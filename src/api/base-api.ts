import { HttpApi, HttpApiProps, HttpStage } from '@aws-cdk/aws-apigatewayv2-alpha';
import { IHttpRouteAuthorizer } from '@aws-cdk/aws-apigatewayv2-alpha/lib/http/authorizer';
import { Construct } from 'constructs';
import { BaseApiDefaultConfiguration } from './base-api-configuration';

/**
 * A small extension to the HttpApi. Creates per default stage "v1" and configures CORS.
 * @see BaseApiDefaultConfiguration
 */
export class BaseApi extends HttpApi {

  readonly authorizer?: IHttpRouteAuthorizer;

  constructor(scope: Construct, id: string, props: HttpApiProps) {
    // hand default props to super
    super(scope, id, {
      ...BaseApiDefaultConfiguration,
      ...props,
    });
    this.authorizer = props.defaultAuthorizer;
    new HttpStage(this, `${id}_Stage`, {
      httpApi: this,
      stageName: 'v1',
      autoDeploy: true,
    });
  }
}
