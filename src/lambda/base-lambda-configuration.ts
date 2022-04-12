import { GoFunctionProps } from '@aws-cdk/aws-lambda-go-alpha';
import { PolicyStatementProps } from 'aws-cdk-lib/aws-iam';
import { NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs/lib/function';
import { ProvisionedConcurrencyConfiguration } from './provisioned-concurrency-configuration';


export interface BaseLambdaConfiguration {
  /**
     * Activate concurrent provisioning (default: false)
     */
  readonly provisionedConcurrency?: boolean;

  /**
     *  Override default configuration for provisioned concurrency
     *  default:
     *  @see DefaultConfiguration
     */
  readonly provisionedConcurrencyConfig?: ProvisionedConcurrencyConfiguration;

  /**
     * List of policy - statements which will be attached to lambda
     */
  readonly policies?: Array<PolicyStatementProps>;

  /**
     * Should save lambda arn as ssm - parameter (default: false)
     */
  readonly shouldStoreArn?: boolean;
}

export interface GoLambdaConfiguration extends BaseLambdaConfiguration {
  /**
   * Should hand in regular function props
   */
  readonly functionProps?: GoFunctionProps;
}


export interface NodejsLambdaConfiguration extends BaseLambdaConfiguration{
  /**
   * Should hand in regular function props
   */
  readonly functionProps?: NodejsFunctionProps;
}
