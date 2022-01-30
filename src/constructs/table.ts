import { RemovalPolicy } from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { Stage } from '../types';
import { getEnvironment } from '../utils';

export interface SingleTableDatastoreProps {
  /**
   * Describes the name of the table.
   */
  readonly tableName: string;
}

const DefaultPropsDynamo = {
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
};

export class SingleTableDatastore extends Construct {

  public readonly table: Table;

  constructor(scope: Construct, id: string, props: SingleTableDatastoreProps) {
    super(scope, id);

    const {
      tableName,
    } = props;

    const env = getEnvironment(scope);

    if (env === Stage.DEVELOPMENT) {
      this.table = new Table(this, tableName, {
        ...DefaultPropsDynamo,
        tableName: tableName,
        removalPolicy: RemovalPolicy.DESTROY,
      });
    } else {
      this.table = new Table(this, tableName, {
        ...DefaultPropsDynamo,
        tableName: tableName,
        timeToLiveAttribute: 'TimeToLive',
      });
    }

    this.table.addGlobalSecondaryIndex({
      partitionKey: {
        name: 'SK',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'PK',
        type: AttributeType.STRING,
      },
      indexName: 'GSI1_Inverted',
    });
  }
}