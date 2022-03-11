import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Microfrontend } from '../../src';

describe('Microfrontend', () => {
  test('should deploy microfrontend without any records', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');
    testStack.node.setContext('env', 'dev');
    testStack.node.setContext('branch', 'master');

    // Create the topic the stack we're testing will reference.
    new Microfrontend(testStack, 'Microfrontend', {
      app: 'Test',
      distPath: './test/microfrontend/test-dist',
    });

    // Prepare the stack for assertions.
    const template = Template.fromStack(testStack);

    template.hasResource('AWS::S3::Bucket', {
      Type: 'AWS::S3::Bucket',
      Properties: {
        AccessControl: 'PublicRead',
        Tags: [
          {
            Key: 'aws-cdk:auto-delete-objects',
            Value: 'true',
          },
          {
            Key: 'aws-cdk:cr-owned:04cd7714',
            Value: 'true',
          },
        ],
      },
      UpdateReplacePolicy: 'Delete',
      DeletionPolicy: 'Delete',
    });

    template.hasResource('AWS::CloudFront::CloudFrontOriginAccessIdentity', {
      Type: 'AWS::CloudFront::CloudFrontOriginAccessIdentity',
      Properties: {
        CloudFrontOriginAccessIdentityConfig: {
          Comment: 'Allows CloudFront to reach the bucket',
        },
      },
    });

    template.hasOutput(
      'MicrofrontendDistributionURL523B8685',
      {
        Description: 'Domain of distribution.',
        Value: {
          'Fn::GetAtt': [
            'MicrofrontendAccessManagementCloudFrontDistributionD6BF3E53',
            'DomainName',
          ],
        },
      });
  });
  test('should deploy microfrontend with records', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');
    testStack.node.setContext('env', 'prod');
    testStack.node.setContext('branch', 'master');

    // Create the topic the stack we're testing will reference.
    new Microfrontend(testStack, 'Microfrontend', {
      app: 'Test',
      distPath: './test/microfrontend/test-dist',
      branchesWithRecords: ['master'],
      config: {
        domainNames: ['test1.test.de', 'test2.test.de'],
        hostedZoneId: 'Z082HDK8381000',
        zoneName: 'test.test.de',
        recordName: 'test1.test.de',
        certificateArn: 'arn:aws:acm:us-east-1:12345678901:certificate/3929dkal-139dkak-1020dl-1020d',
      },
    });

    // Prepare the stack for assertions.
    const template = Template.fromStack(testStack);

    template.hasResource('AWS::S3::Bucket', {
      Type: 'AWS::S3::Bucket',
      Properties: {
        AccessControl: 'PublicRead',
        Tags: [
          {
            Key: 'aws-cdk:cr-owned:04cd7714',
            Value: 'true',
          },
        ],
      },
      UpdateReplacePolicy: 'Retain',
      DeletionPolicy: 'Retain',
    });

    template.hasResource('AWS::CloudFront::CloudFrontOriginAccessIdentity', {
      Type: 'AWS::CloudFront::CloudFrontOriginAccessIdentity',
      Properties: {
        CloudFrontOriginAccessIdentityConfig: {
          Comment: 'Allows CloudFront to reach the bucket',
        },
      },
    });

    template.hasOutput(
      'MicrofrontendDistributionURL523B8685',
      {
        Description: 'Domain of distribution.',
        Value: {
          'Fn::GetAtt': [
            'MicrofrontendAccessManagementCloudFrontDistributionD6BF3E53',
            'DomainName',
          ],
        },
      });
  });
});

