import { RemovalPolicy } from 'aws-cdk-lib';
import { AttributeType, BillingMode, TableProps } from 'aws-cdk-lib/aws-dynamodb';

export type SingleTableDatastoreConfiguration = {
  [key: string]: TableProps;
};

/**
 * Default props will be injected into the constructor with default values for dynamodb - tables following
 * single - table - design.
 */
export const Configuration: SingleTableDatastoreConfiguration = {
  dev: {
    partitionKey: {
      name: 'PK',
      type: AttributeType.STRING,
    },
    sortKey: {
      name: 'SK',
      type: AttributeType.STRING,
    },
    billingMode: BillingMode.PAY_PER_REQUEST,
    timeToLiveAttribute: 'TimeToLive',
    removalPolicy: RemovalPolicy.RETAIN,
  },
  prod: {
    partitionKey: {
      name: 'PK',
      type: AttributeType.STRING,
    },
    sortKey: {
      name: 'SK',
      type: AttributeType.STRING,
    },
    pointInTimeRecovery: true,
    billingMode: BillingMode.PAY_PER_REQUEST,
    timeToLiveAttribute: 'TimeToLive',
    removalPolicy: RemovalPolicy.RETAIN,
  },
};