import { AttributeType, Table, TableProps } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';
import { getEnvironment } from '../utils';
import { Configuration } from './single-table-datastore-configuration';

export type SingleTableDatastoreProps = Omit<TableProps, 'partitionKey'>;

/**
 * Extends dynamodb - table and streamline creating dynamodb - tables following single - table - design.
 *
 * @see https://www.alexdebrie.com/posts/dynamodb-single-table/
 */
export class SingleTableDatastore extends Table {

  constructor(scope: Construct, id: string, props: SingleTableDatastoreProps) {

    // inject default props before calling super
    const superProps = {
      ...props,
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