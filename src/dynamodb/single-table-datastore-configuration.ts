import { RemovalPolicy } from 'aws-cdk-lib';
import { AttributeType, BillingMode, TableProps } from 'aws-cdk-lib/aws-dynamodb';
import { Stage } from '../types';

export type SingleTableDatastoreConfiguration = {
  [key in Stage]: TableProps;
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
    removalPolicy: RemovalPolicy.DESTROY,
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
  },
};