import { CorsHttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
import { Duration } from 'aws-cdk-lib';

export const BaseApiDefaultConfiguration = {
  corsPreflight: {
    allowHeaders: ['Authorization', 'content-type', '*'],
    allowMethods: [
      CorsHttpMethod.GET,
      CorsHttpMethod.HEAD,
      CorsHttpMethod.OPTIONS,
      CorsHttpMethod.POST,
      CorsHttpMethod.DELETE
    ],
    allowOrigins: ['*'],
    maxAge: Duration.days(10),
  },
};