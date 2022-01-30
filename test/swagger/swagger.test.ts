import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Swagger } from '../../src';

describe('Swagger', () => {
  test('should create bucket and deploy swaggerfile', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');
    testStack.node.setContext('env', 'dev');

    // Create the topic the stack we're testing will reference.
    new Swagger(testStack, 'Swagger', {
      bucketName: 'swagger-bucket',
      path: './test/swagger/swagger.json.zip',
    });

    // Prepare the stack for assertions.
    const template = Template.fromStack(testStack);

    template.hasResource('AWS::S3::Bucket', {
      Type: 'AWS::S3::Bucket',
      Properties: {
        BucketName: 'swagger-bucket-dev',
        CorsConfiguration: {
          CorsRules: [
            {
              AllowedHeaders: [
                '*',
              ],
              AllowedMethods: [
                'GET',
              ],
              AllowedOrigins: [
                '*',
              ],
            },
          ],
        },
        Tags: [
          {
            Key: 'aws-cdk:auto-delete-objects',
            Value: 'true',
          },
          {
            Key: 'aws-cdk:cr-owned:de4ee74c',
            Value: 'true',
          },
        ],
      },
      UpdateReplacePolicy: 'Delete',
      DeletionPolicy: 'Delete',
    });
  });
});

