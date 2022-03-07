import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { SingleTableDatastore } from '../../src';

describe('SingleTableDatastore', () => {
  const properties = {
    KeySchema: [
      {
        AttributeName: 'PK',
        KeyType: 'HASH',
      },
      {
        AttributeName: 'SK',
        KeyType: 'RANGE',
      },
    ],
    AttributeDefinitions: [
      {
        AttributeName: 'PK',
        AttributeType: 'S',
      },
      {
        AttributeName: 'SK',
        AttributeType: 'S',
      },
    ],
    BillingMode: 'PAY_PER_REQUEST',
    GlobalSecondaryIndexes: [
      {
        IndexName: 'GSI1_Inverted',
        KeySchema: [
          {
            AttributeName: 'SK',
            KeyType: 'HASH',
          },
          {
            AttributeName: 'PK',
            KeyType: 'RANGE',
          },
        ],
        Projection: {
          ProjectionType: 'ALL',
        },
      },
    ],
    TableName: 'SingleTableDataStore',
    TimeToLiveSpecification: {
      AttributeName: 'TimeToLive',
      Enabled: true,
    },
  };

  test('should create table for dev', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');
    testStack.node.setContext('env', 'dev');

    // Create the topic the stack we're testing will reference.
    new SingleTableDatastore(testStack, 'SingleTableDatastore', {
      tableName: 'SingleTableDataStore',
    });

    // Prepare the stack for assertions.
    const template = Template.fromStack(testStack);

    // assertion
    template.hasResource('AWS::DynamoDB::Table', {
      Type: 'AWS::DynamoDB::Table',
      Properties: properties,
      UpdateReplacePolicy: 'Retain',
      DeletionPolicy: 'Retain',
    });
  });
  test('should create table for prod', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');
    testStack.node.setContext('env', 'prod');

    // Create the topic the stack we're testing will reference.
    new SingleTableDatastore(testStack, 'SingleTableDatastore', {
      tableName: 'SingleTableDataStore',
    });

    // Prepare the stack for assertions.
    const template = Template.fromStack(testStack);

    // assertion
    template.hasResource('AWS::DynamoDB::Table', {
      Type: 'AWS::DynamoDB::Table',
      Properties: properties,
      UpdateReplacePolicy: 'Retain',
      DeletionPolicy: 'Retain',
    });
  });
  test('should create table with multiple gsi', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');
    testStack.node.setContext('env', 'dev');

    // Create the topic the stack we're testing will reference.
    const table = new SingleTableDatastore(testStack, 'SingleTableDatastore', {
      tableName: 'SingleTableDataStore',
    });
    table.addGlobalSecondaryIndex({
      partitionKey: {
        name: 'TestOne',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'TestTwo',
        type: AttributeType.STRING,
      },
      indexName: 'GSI1_Test',
    });

    // Prepare the stack for assertions.
    const template = Template.fromStack(testStack);

    let props = properties;
    props.AttributeDefinitions.push({
      AttributeName: 'TestOne',
      AttributeType: 'S',
    },
    {
      AttributeName: 'TestTwo',
      AttributeType: 'S',
    });
    props.GlobalSecondaryIndexes.push( {
      IndexName: 'GSI1_Test',
      KeySchema: [
        {
          AttributeName: 'TestOne',
          KeyType: 'HASH',
        },
        {
          AttributeName: 'TestTwo',
          KeyType: 'RANGE',
        },
      ],
      Projection: {
        ProjectionType: 'ALL',
      },
    });

    // assertion
    template.hasResource('AWS::DynamoDB::Table', {
      Type: 'AWS::DynamoDB::Table',
      Properties: props,
      UpdateReplacePolicy: 'Retain',
      DeletionPolicy: 'Retain',
    });
  });
});