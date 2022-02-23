import { PolicyStatementProps } from 'aws-cdk-lib/aws-iam';
import { FunctionOptions } from 'aws-cdk-lib/aws-lambda';
import { ProvisionedConcurrencyConfiguration } from './provisioned-concurrency-configuration';

export interface BaseLambdaConfiguration<FunctionProps extends FunctionOptions> {
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

  /**
   * Should hand in regular function props
   */
  readonly functionProps?: FunctionProps;
}
