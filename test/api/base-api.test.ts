import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { BaseApi } from '../../src';

describe('BaseApi', () => {
  test('Should create base api with stage', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');

    // Create the topic the stack we're testing will reference.
    new BaseApi(testStack, 'BaseApi', {
      apiName: 'BaseApiHttpApi',
    });

    // Prepare the stack for assertions.
    const template = Template.fromStack(testStack);

    template.hasResource('AWS::ApiGatewayV2::Api', {
      Type: 'AWS::ApiGatewayV2::Api',
      Properties: {
        CorsConfiguration: {
          AllowHeaders: [
            'Authorization',
            'content-type',
            '*',
          ],
          AllowMethods: [
            'GET',
            'HEAD',
            'OPTIONS',
            'POST',
            'DELETE'
          ],
          AllowOrigins: [
            '*',
          ],
          MaxAge: 864000,
        },
        Name: 'BaseApiHttpApi',
        ProtocolType: 'HTTP',
      },
    });
    template.hasResource('AWS::ApiGatewayV2::Stage', {
      Type: 'AWS::ApiGatewayV2::Stage',
      Properties: {
        ApiId: {
          Ref: 'BaseApi256FE39D',
        },
        StageName: '$default',
        AutoDeploy: true,
      },
    });
    template.hasResource('AWS::ApiGatewayV2::Stage', {
      Type: 'AWS::ApiGatewayV2::Stage',
      Properties: {
        ApiId: {
          Ref: 'BaseApi256FE39D',
        },
        StageName: 'v1',
        AutoDeploy: true,
      },
    });
  });
});