import { RemovalPolicy } from 'aws-cdk-lib';
import { Bucket, HttpMethods } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import { getEnvironment } from '../utils';
import { SwaggerConfiguration } from './swagger-configuration';

/**
 * Deploys a swagger json to a S3 - Bucket and exposes it.
 */
export class Swagger extends Construct {
  readonly bucket: Bucket;

  constructor(scope: Construct, id: string, props: SwaggerConfiguration) {
    super(scope, id);

    this.bucket = new Bucket(scope, 'SwaggerBucket', {
      versioned: false,
      bucketName: `${props.bucketName}-${getEnvironment(scope)}`,
      publicReadAccess: true,
      cors: [
        {
          allowedHeaders: ['*'],
          allowedMethods: [HttpMethods.GET],
          allowedOrigins: ['*'],
        },
      ],
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    try {
      new BucketDeployment(scope, 'DeploySwaggerJson', {
        sources: [Source.asset(props.path)],
        destinationBucket: this.bucket,
        contentType: 'application/json',
      });
    } catch (error) {
      console.log(error);
    }
  }
}
