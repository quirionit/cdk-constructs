import { GoFunction, GoFunctionProps } from '@aws-cdk/aws-lambda-go-alpha';
import { Schedule } from 'aws-cdk-lib/aws-events';
import { PolicyStatement, PolicyStatementProps } from 'aws-cdk-lib/aws-iam';
import { Alias, FunctionOptions, Tracing } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs/lib/function';
import { ParameterTier, StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
import { Stage } from '../types';
import { fromContext, isType } from '../utils';

/**
 * Types of supported lambdas
 */
export enum FunctionType {
  GO,
  NODEJS,
}

export interface BaseLambdaProps {
  /**
     * What kind of function should be created
     */
  readonly functionType: FunctionType;

  /**
     * Name of lambda
     */
  readonly name: string;

  /**
     * path to lambda lambda
     */
  readonly path: string;

  /**
     * Activate concurrent provisioning (default: false)
     */
  readonly provisionedConcurrency?: boolean;

  /**
     *  Override default configuration for provisioned concurrency
     */
  readonly provisionedConcurrencyConfig?: ProvisionedConcurrencyConfiguration;

  /**
     * List of policy - statements which will be attached to lambda
     */
  readonly policies?: Array<PolicyStatementProps>;

  /**
     * Property for lambda - function (will override defaults)
     */
  readonly args?: FunctionOptions;

  /**
     * Should save lambda arn as ssm - parameter (default: false)
     */
  readonly shouldStoreArn?: boolean;
}

/**
 * Time for provisioned concurrency (from - to)
 */
export interface ProvisionedConcurrencyConfigurationTime {
  readonly hour: string;
  readonly minute: string;
}

/**
 * Configuration for provisioned concurrency
 */
export interface ProvisionedConcurrencyConfiguration {
  readonly minCapacity: number;
  readonly maxCapacity: number;
  readonly from: ProvisionedConcurrencyConfigurationTime;
  readonly to: ProvisionedConcurrencyConfigurationTime;
  readonly utilizationTarget: number;
}

/**
 * Default configuration if provisioned concurrency is activated
 */
const defaultConfiguration = {
  minCapacity: 5,
  maxCapacity: 20,
  from: { hour: '10', minute: '0' },
  to: { hour: '21', minute: '0' },
  utilizationTarget: 0.5,
};

export class BaseLambda extends Construct {

  readonly function: NodejsFunction | GoFunction;

  readonly path: string;

  readonly provisionedConcurrency: boolean;

  readonly shouldStoreArn: boolean;

  readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;

  readonly policies?: Array<PolicyStatementProps>;

  constructor(scope: Construct, id: string, props: BaseLambdaProps) {
    super(scope, id);

    const {
      functionType,
      name,
      path,
      provisionedConcurrency = false,
      policies,
      args,
      shouldStoreArn = false,
      provisionedConcurrencyConfig = defaultConfiguration,
    } = props;

    // initialise fields
    this.path = path;
    this.provisionedConcurrency = provisionedConcurrency;
    this.policies = policies;
    this.shouldStoreArn = shouldStoreArn;
    this.provisionedConcurrencyConfig = provisionedConcurrencyConfig;

    // load env from context
    const env = fromContext(scope, 'env');

    // create function
    if (functionType === FunctionType.NODEJS && isType<Partial<NodejsFunctionProps>>(args)) {
      this.function = new NodejsFunction(this, name, {
        functionName: name,
        entry: path,
        tracing: Tracing.ACTIVE,
        ...args,
      });
    } else if (functionType === FunctionType.GO && isType<Partial<GoFunctionProps>>(args)) {
      this.function = new GoFunction(this, name, {
        functionName: name,
        entry: path,
        tracing: Tracing.ACTIVE,
        bundling: {
          goBuildFlags: ['-ldflags "-s -w"'],
        },
        ...args,
      });
    } else {
      throw new Error('Args don´t match functionType');
    }

    // Add policies / roles
    if (policies && policies.length > 0) {
      policies.forEach(policyProp => {
        this.function.addToRolePolicy(
          new PolicyStatement(policyProp),
        );
      });
    }

    // Define Scaling only for production
    const alias = new Alias(scope, `${name}_Alias`, {
      aliasName: Stage.PRODUCTION,
      version: this.function.currentVersion,
    });

    if (env === Stage.PRODUCTION && provisionedConcurrency) {
      const target = alias.addAutoScaling({
        minCapacity: provisionedConcurrencyConfig.minCapacity,
        maxCapacity: provisionedConcurrencyConfig.maxCapacity,
      });

      target.scaleOnUtilization({
        utilizationTarget: provisionedConcurrencyConfig.utilizationTarget,
      });

      target.scaleOnSchedule(`${name}_ScaleUpInTheMorning`, {
        schedule: Schedule.cron(provisionedConcurrencyConfig.from),
        minCapacity: provisionedConcurrencyConfig.minCapacity,
      });

      target.scaleOnSchedule(`${name}_ScaleDownAtNight`, {
        schedule: Schedule.cron(provisionedConcurrencyConfig.to),
        maxCapacity: provisionedConcurrencyConfig.maxCapacity,
      });
    }

    // Store Parameter in Store
    if (shouldStoreArn) {
      const aliasString = env === Stage.PRODUCTION ? ':prod' : '';
      new StringParameter(scope, `Lambdas_${name}_ArnParameter`, {
        parameterName: `/lambdas/${name}/arn`,
        stringValue: this.function.functionArn + aliasString,
        tier: ParameterTier.STANDARD,
      });
    }
  }

  get arn() {
    const functionArn = this.function.functionArn;
    return fromContext(this, 'env') === Stage.PRODUCTION ? functionArn + ':prod' : functionArn;
  }
}
