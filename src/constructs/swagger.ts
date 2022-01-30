import { RemovalPolicy } from 'aws-cdk-lib';
import { Bucket, HttpMethods } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export interface SwaggerProps {
  /**
   * Name of bucket
   */
  readonly bucketName: string;

  /**
   * Path to asset to upload to s3 (Zipped Swagger documentation)
   */
  readonly path: string;
}

export class Swagger extends Construct {
  readonly bucket: Bucket;

  constructor(scope: Construct, id: string, props: SwaggerProps) {
    super(scope, id);

    this.bucket = new Bucket(scope, 'SwaggerBucket', {
      versioned: false,
      bucketName: props.bucketName,
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
