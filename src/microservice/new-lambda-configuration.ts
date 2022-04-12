import { FunctionOptions } from 'aws-cdk-lib/aws-lambda';
import { BaseLambdaConfiguration } from '../lambda';
import { QueueConfiguration } from './queue-configuration';
import { RouteConfiguration } from './route-configuration';

export interface NewLambdaConfiguration<FunctionProps extends FunctionOptions> {
  /**
   * Path to lambda
   */
  readonly path: string;

  /**
   * Type of lambda
   */
  readonly type: 'Go' | 'Nodejs';

  /**
   * Name of lambda
   */
  readonly name?: string;

  /**
   * Should be subscribed to queue
   */
  readonly queue?: QueueConfiguration;

  /**
   * Hand in extra lambda props
   */
  readonly lambdaProps?: BaseLambdaConfiguration<FunctionProps>;

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