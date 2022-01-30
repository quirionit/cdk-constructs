import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { AccessManagement } from '../../lib/microfrontend/access-management';

describe('AccessManagement', () => {
  test('should deploy access management for a bucket without any deployment config', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');

    // Create the topic the stack we're testing will reference.
    new AccessManagement(testStack, 'AccessManagement', {
      bucket: new Bucket(testStack, 'Bucket'),
    });

    // Prepare the stack for assertions.
    const template = Template.fromStack(testStack);
    template.hasResource('AWS::CloudFront::Distribution', {
      Type: 'AWS::CloudFront::Distribution',
      Properties: {
        DistributionConfig: {
          DefaultCacheBehavior: {
            AllowedMethods: [
              'GET',
              'HEAD',
              'OPTIONS',
              'PUT',
              'PATCH',
              'POST',
              'DELETE',
            ],
            CachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
            Compress: true,
            TargetOriginId: 'TestStackAccessManagementCloudFrontDistributionOrigin1CB2280B4',
            ViewerProtocolPolicy: 'redirect-to-https',
          },
          DefaultRootObject: 'index.html',
          Enabled: true,
          HttpVersion: 'http2',
          IPV6Enabled: true,
          Origins: [
            {
              DomainName: {
                'Fn::GetAtt': [
                  'Bucket83908E77',
                  'RegionalDomainName',
                ],
              },
              Id: 'TestStackAccessManagementCloudFrontDistributionOrigin1CB2280B4',
              S3OriginConfig: {
                OriginAccessIdentity: {
                  'Fn::Join': [
                    '',
                    [
                      'origin-access-identity/cloudfront/',
                      {
                        Ref: 'AccessManagementOriginAccessIdentityD8CD7FA6',
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      },
    });
    expect(template.findResources('AWS::Route53::RecordSet')).toStrictEqual({});
  });
  test('should deploy access management for a bucket with deployment config', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');

    // Create the topic the stack we're testing will reference.
    new AccessManagement(testStack, 'AccessManagement', {
      bucket: new Bucket(testStack, 'Bucket'),
      deploymentConfiguration: {
        domainNames: ['test1.test.de', 'test2.test.de'],
        hostedZoneId: 'Z082HDK8381000',
        zoneName: 'test.test.de',
        recordName: 'test1.test.de',
        certificateArn: 'arn:aws:acm:us-east-1:12345678901:certificate/3929dkal-139dkak-1020dl-1020d',
      },
    });

    // Prepare the stack for assertions.
    const template = Template.fromStack(testStack);
    template.hasResource('AWS::CloudFront::Distribution', {
      Type: 'AWS::CloudFront::Distribution',
      Properties: {
        DistributionConfig: {
          DefaultCacheBehavior: {
            AllowedMethods: [
              'GET',
              'HEAD',
              'OPTIONS',
              'PUT',
              'PATCH',
              'POST',
              'DELETE',
            ],
            CachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
            Compress: true,
            TargetOriginId: 'TestStackAccessManagementCloudFrontDistributionOrigin1CB2280B4',
            ViewerProtocolPolicy: 'redirect-to-https',
          },
          DefaultRootObject: 'index.html',
          Enabled: true,
          HttpVersion: 'http2',
          IPV6Enabled: true,
          Origins: [
            {
              DomainName: {
                'Fn::GetAtt': [
                  'Bucket83908E77',
                  'RegionalDomainName',
                ],
              },
              Id: 'TestStackAccessManagementCloudFrontDistributionOrigin1CB2280B4',
              S3OriginConfig: {
                OriginAccessIdentity: {
                  'Fn::Join': [
                    '',
                    [
                      'origin-access-identity/cloudfront/',
                      {
                        Ref: 'AccessManagementOriginAccessIdentityD8CD7FA6',
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      },
    });
    template.hasResource('AWS::Route53::RecordSet', {
      Type: 'AWS::Route53::RecordSet',
      Properties: {
        Name: 'test1.test.de.test.test.de.',
        Type: 'CNAME',
        HostedZoneId: 'Z082HDK8381000',
        ResourceRecords: [
          {
            'Fn::GetAtt': [
              'AccessManagementCloudFrontDistribution4AC9D550',
              'DomainName',
            ],
          },
        ],
        TTL: '1800',
      },
    });
  });
});
