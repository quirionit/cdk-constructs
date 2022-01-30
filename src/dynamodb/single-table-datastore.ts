import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { getEnvironment } from '../utils';
import { Configuration } from './single-table-datastore-configuration';

export interface SingleTableDatastoreProps {
  /**
   * Mandatory table name
   */
  readonly tableName: string;

  /**
   * TODO figure out how to use TableProps but every attribute is optional.
   * Optional extend deployment with more table props. Notice the injected config will override some.
   * @see Configuration
   */
  readonly options?: any;
}

/**
 * Extends dynamodb - table and streamline creating dynamodb - tables following single - table - design.
 *
 * @see https://www.alexdebrie.com/posts/dynamodb-single-table/
 */
export class SingleTableDatastore extends Table {

  constructor(scope: Construct, id: string, props?: SingleTableDatastoreProps) {

    // inject default props before calling super
    const superProps = {
      ...props?.options,
      tableName: props?.tableName,
      ...Configuration[getEnvironment(scope)],
    };

    // create table
    super(scope, id, superProps);

    // create standard global index for inverted search
    this.addGlobalSecondaryIndex({
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