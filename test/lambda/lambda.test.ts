import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { GoLambda, NodeJsLambda } from '../../src';

describe('Lambda', () => {
  test('should create a simple go lambda', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');

    // create go lambda
    new GoLambda(testStack, 'GoLambda', {
      functionProps: {
        functionName: 'GoLambda',
        entry: './test/lambda/test-lambdas/go',
      },
    });

    const template = Template.fromStack(testStack);
    template.hasResource('AWS::Lambda::Function', {
      Type: 'AWS::Lambda::Function',
      Properties: {
        Code: {
          S3Bucket: {
            'Fn::Sub': 'cdk-hnb659fds-assets-${AWS::AccountId}-${AWS::Region}',
          },
          S3Key: '823b12584233f95c44caa48e3e01c30f1263e3ca36aa01cda9e7cfafaa7ab3db.zip',
        },
        Role: {
          'Fn::GetAtt': [
            'GoLambdaServiceRole6C49DABB',
            'Arn',
          ],
        },
        FunctionName: 'GoLambda',
        Handler: 'bootstrap',
        Runtime: 'provided.al2',
      },
      DependsOn: [
        'GoLambdaServiceRole6C49DABB',
      ],
    });
  });
  test('should create a go lambda with provisional concurrency', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');

    // create go lambda
    new GoLambda(testStack, 'GoLambda', {
      provisionedConcurrency: true,
      policies: [
        { resources: ['*'], actions: ['dynamodb:*'] },
      ],
      functionProps: {
        functionName: 'GoLambda',
        entry: './test/lambda/test-lambdas/go',
      },
    });

    const template = Template.fromStack(testStack);

    // should have function
    template.hasResource('AWS::Lambda::Function', {
      Type: 'AWS::Lambda::Function',
      Properties: {
        Code: {
          S3Bucket: {
            'Fn::Sub': 'cdk-hnb659fds-assets-${AWS::AccountId}-${AWS::Region}',
          },
          S3Key: '823b12584233f95c44caa48e3e01c30f1263e3ca36aa01cda9e7cfafaa7ab3db.zip',
        },
        Role: {
          'Fn::GetAtt': [
            'GoLambdaServiceRole6C49DABB',
            'Arn',
          ],
        },
        FunctionName: 'GoLambda',
        Handler: 'bootstrap',
        Runtime: 'provided.al2',
      },
      DependsOn: [
        'GoLambdaServiceRoleDefaultPolicyDB3B7E25',
        'GoLambdaServiceRole6C49DABB',
      ],
    });

    // should have alias
    template.hasResource('AWS::Lambda::Alias', {
      Type: 'AWS::Lambda::Alias',
      Properties: {
        FunctionName: {
          Ref: 'GoLambdaDB6DB034',
        },
        FunctionVersion: {
          'Fn::GetAtt': [
            'GoLambdaCurrentVersion291F7E8C9ad98c1dcac2a13c94fbb29d17921e8d',
            'Version',
          ],
        },
        Name: 'pc',
      },
    });

    // should have version
    template.hasResource('AWS::Lambda::Version', {
      Type: 'AWS::Lambda::Version',
      Properties: {
        FunctionName: {
          Ref: 'GoLambdaDB6DB034',
        },
      },
    });

    // should have ApplicationAutoScaling
    template.hasResource('AWS::ApplicationAutoScaling::ScalableTarget', {
      Type: 'AWS::ApplicationAutoScaling::ScalableTarget',
      Properties: {
        MaxCapacity: 20,
        MinCapacity: 5,
        ResourceId: {
          'Fn::Join': [
            '',
            [
              'function:',
              {
                'Fn::Select': [
                  6,
                  {
                    'Fn::Split': [
                      ':',
                      {
                        Ref: 'GoLambdaAlias6B7CE217',
                      },
                    ],
                  },
                ],
              },
              ':pc',
            ],
          ],
        },
        RoleARN: {
          'Fn::Join': [
            '',
            [
              'arn:',
              {
                Ref: 'AWS::Partition',
              },
              ':iam::',
              {
                Ref: 'AWS::AccountId',
              },
              ':role/aws-service-role/lambda.application-autoscaling.amazonaws.com/AWSServiceRoleForApplicationAutoScaling_LambdaConcurrency',
            ],
          ],
        },
        ScalableDimension: 'lambda:function:ProvisionedConcurrency',
        ServiceNamespace: 'lambda',
        ScheduledActions: [
          {
            ScalableTargetAction: {
              MinCapacity: 5,
            },
            Schedule: 'cron(0 10 * * ? *)',
            ScheduledActionName: 'ScaleUpInTheMorning',
          },
          {
            ScalableTargetAction: {
              MaxCapacity: 20,
            },
            Schedule: 'cron(0 21 * * ? *)',
            ScheduledActionName: 'ScaleDownAtNight',
          },
        ],
      },
    });

    // should have ScalableTarget
    template.hasResource('AWS::ApplicationAutoScaling::ScalingPolicy', {
      Type: 'AWS::ApplicationAutoScaling::ScalingPolicy',
      Properties: {
        PolicyName: 'TestStackGoLambdaAliasAliasScalingTargetTracking9380F661',
        PolicyType: 'TargetTrackingScaling',
        ScalingTargetId: {
          Ref: 'GoLambdaAliasAliasScalingTarget2A349494',
        },
        TargetTrackingScalingPolicyConfiguration: {
          PredefinedMetricSpecification: {
            PredefinedMetricType: 'LambdaProvisionedConcurrencyUtilization',
          },
          TargetValue: 0.5,
        },
      },
    });
  });
  test('should create a simple nodejs lambda', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');

    // create go lambda
    new NodeJsLambda(testStack, 'NodeJsLambda', {
      functionProps: {
        functionName: 'NodeJsLambda',
        entry: './test/lambda/test-lambdas/nodejs/index.ts',
      },
    });

    // assertion
    const template = Template.fromStack(testStack);
    template.hasResource('AWS::Lambda::Function', {
      Type: 'AWS::Lambda::Function',
      Properties: {
        Code: {
          S3Bucket: {
            'Fn::Sub': 'cdk-hnb659fds-assets-${AWS::AccountId}-${AWS::Region}',
          },
          S3Key: '3bd8f3ac0fd79ce7d11813ba59a6c52dd95fec4f790a7284b042c1298f540905.zip',
        },
        Role: {
          'Fn::GetAtt': [
            'NodeJsLambdaServiceRoleFA44C8F8',
            'Arn',
          ],
        },
        Environment: {
          Variables: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
          },
        },
        FunctionName: 'NodeJsLambda',
        Handler: 'index.handler',
        Runtime: 'nodejs14.x',
      },
      DependsOn: [
        'NodeJsLambdaServiceRoleFA44C8F8',
      ],
    });
  });
  test('should create a nodejs lambda with provisional concurrency', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');

    // create go lambda
    new NodeJsLambda(testStack, 'NodeJsLambda', {
      provisionedConcurrency: true,
      policies: [
        { resources: ['*'], actions: ['dynamodb:*'] },
      ],
      functionProps: {
        functionName: 'NodeJsLambda',
        entry: './test/lambda/test-lambdas/nodejs/index.ts',
      },
    });

    // assertion
    const template = Template.fromStack(testStack);
    template.hasResource('AWS::Lambda::Function', {
      Type: 'AWS::Lambda::Function',
      Properties: {
        Code: {
          S3Bucket: {
            'Fn::Sub': 'cdk-hnb659fds-assets-${AWS::AccountId}-${AWS::Region}',
          },
          S3Key: '3bd8f3ac0fd79ce7d11813ba59a6c52dd95fec4f790a7284b042c1298f540905.zip',
        },
        Role: {
          'Fn::GetAtt': [
            'NodeJsLambdaServiceRoleFA44C8F8',
            'Arn',
          ],
        },
        Environment: {
          Variables: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
          },
        },
        FunctionName: 'NodeJsLambda',
        Handler: 'index.handler',
        Runtime: 'nodejs14.x',
      },
      DependsOn: [
        'NodeJsLambdaServiceRoleDefaultPolicy268E1221',
        'NodeJsLambdaServiceRoleFA44C8F8',
      ],
    });
  });
});