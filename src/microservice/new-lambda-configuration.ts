import { GoLambdaConfiguration, NodejsLambdaConfiguration } from '../lambda';
import { QueueConfiguration } from './queue-configuration';
import { RouteConfiguration } from './route-configuration';

export interface NewLambdaConfiguration {
  /**
   * Path to lambda
   */
  readonly path: string;

  /**
   * Type of lambda
   */
  readonly type: 'Go' | 'Nodejs';


  /**
   * Should be subscribed to queue
   */
  readonly queue?: QueueConfiguration;

  /**
   * Hand in extra lambda props
   */
  readonly lambdaProps?: GoLambdaConfiguration | NodejsLambdaConfiguration;

  /**
   * Route configuration for api lambdas
   * @example
   * route: {
   *     path: '/hello-world',
   *     method: HttpMethod.GET
   * },
   */
  readonly route?: RouteConfiguration;
}