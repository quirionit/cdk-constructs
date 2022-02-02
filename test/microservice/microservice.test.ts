import { HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Microservice } from '../../src';

describe('Microservice', () => {
  test('Should create a microservice', () => {
    const app = new App();

    // create test stack
    const testStack = new Stack(app, 'TestStack');
    testStack.node.setContext('env', 'dev');

    // Create the topic the stack we're testing will reference.
    const ms = new Microservice(testStack, 'Microservice', {
      domain: 'Mico',
      context: 'Service',
      dataStore: true,
      eventStore: true,
      api: {
        public: false,
        swagger: {
          bucketName: 'microservice-swagger-bucket',
          path: './test/swagger/swagger.json.zip',
        },
      },
    });
    ms.newLambda({
      type: 'Go',
      path: './test/lambda/test-lambdas/go',
      route: {
        path: '/test/path/go',
        method: HttpMethod.GET,
      },
    });
    const nodejsLambda = ms.newLambda({
      type: 'Nodejs',
      path: './test/lambda/test-lambdas/nodejs/index.ts',
      route: {
        path: '/test/path/node',
        method: HttpMethod.GET,
      },
    });

    // Prepare the stack for assertions.
    const template = Template.fromStack(testStack);

    expect(ms.lambdas.Microservice_TestLambdaTestLambdasGo.runtime.name).toBe('provided.al2');
    expect(nodejsLambda.runtime.name).toBe('nodejs14.x');
    expect(Object.keys(template.findResources('AWS::DynamoDB::Table')).length).toBe(2);
    expect(template.findResources('AWS::ApiGatewayV2::Api')).toBeDefined();
    expect(Object.keys(template.findResources('AWS::ApiGatewayV2::Route')).length).toBe(2);
    Object.keys(template.findResources('AWS::ApiGatewayV2::Route')).forEach((key) => {
      const route = template.findResources('AWS::ApiGatewayV2::Route')[key];
      expect(route.Properties.AuthorizationType).toBe('AWS_IAM');
    });
  });
});