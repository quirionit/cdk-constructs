import { PolicyStatement, PolicyStatementProps } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs/lib/function';
import { ParameterTier, StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { isType } from '../utils';
import { BaseLambdaConfiguration } from './base-lambda-configuration';
import { ProvisionedConcurrency } from './provisioned-concurrency';
import { ProvisionedConcurrencyDefaultConfiguration, ProvisionedConcurrencyConfiguration } from './provisioned-concurrency-configuration';

export class NodeJsLambda extends NodejsFunction {

  readonly provisionedConcurrency: boolean;

  readonly shouldStoreArn: boolean;

  readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;

  readonly policies?: Array<PolicyStatementProps>;

  constructor(scope: Construct, id: string, props: BaseLambdaConfiguration<NodejsFunctionProps>) {

    if (!isType<NodejsFunctionProps>(props.functionProps)) {
      throw new Error('functionProps must be of type NodejsFunctionProps');
    }

    const {
      provisionedConcurrency = false,
      policies,
      shouldStoreArn = false,
      provisionedConcurrencyConfig = ProvisionedConcurrencyDefaultConfiguration,
    } = props;

    super(scope, id, props.functionProps);

    // initialise fields
    this.provisionedConcurrency = provisionedConcurrency;
    this.policies = policies;
    this.shouldStoreArn = shouldStoreArn;
    this.provisionedConcurrencyConfig = provisionedConcurrencyConfig;

    // Add policies / roles
    if (policies && policies.length > 0) {
      policies.forEach(policyProp => {
        this.addToRolePolicy(
          new PolicyStatement(policyProp),
        );
      });
    }

    // Define provisioned concurrency
    if (provisionedConcurrency) {
      new ProvisionedConcurrency(this, 'ProvisionedConcurrency', this, provisionedConcurrencyConfig);
    }

    // Store Parameter in Store
    if (shouldStoreArn) {
      const aliasString = provisionedConcurrency ? ':pc' : '';
      new StringParameter(scope, 'LambdasArnParameter', {
        parameterName: `/lambdas/${this.functionName}/arn`,
        stringValue: this.functionArn + aliasString,
        tier: ParameterTier.STANDARD,
      });
    }
  }

  get arnWithAlias() {
    return this.provisionedConcurrency ? this.functionArn + 'pc' : this.functionArn;
  }
}
