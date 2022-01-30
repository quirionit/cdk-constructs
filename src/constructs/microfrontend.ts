import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
  AllowedMethods,
  Distribution,
  OriginAccessIdentity,
  SecurityPolicyProtocol,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { CnameRecord, HostedZone } from 'aws-cdk-lib/aws-route53';
import { Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import { filterSpecialCharacters, fromContext } from '../utils';

/**
 * Used context variables
 */
export interface Config {
  readonly domainNames: string[];
  readonly hostedZoneId: string;
  readonly zoneName: string;
  readonly recordName: string;
  readonly certificateArn: string;
}

/**
 * Additional props to create a new microfrontend stack
 */
export interface MicroFrontendProps {

  /**
   * Describes the name of the app
   */
  readonly app: string;

  /**
   * Path to generated / built files
   */
  readonly distPath: string;

  /**
   * Deployment configuration
   */
  readonly config: Config;
}

export enum ContextVariables {
  ENV = 'env',
  BRANCH = 'branch'
}

/**
 * MicroFrontendStack deploys static files to a public s3 bucket
 */
export class MicroFrontend extends Construct {
  constructor(scope: Construct, id: string, props: MicroFrontendProps) {
    super(scope, filterSpecialCharacters(id));

    const {
      app: preFormatApp,
      distPath,
      config,
    } = props;

    const app = filterSpecialCharacters(preFormatApp);

    // load branch
    const branch = fromContext(scope, ContextVariables.BRANCH) ?? 'master';

    // create generic s3 bucket with private access control
    let bucket;
    if (branch === 'production') {
      bucket = new Bucket(this, `S3Bucket_${app}`, {
        accessControl: BucketAccessControl.PRIVATE,
      });
    } else {
      bucket = new Bucket(this, `S3Bucket_${app}`, {
        accessControl: BucketAccessControl.PRIVATE,
        removalPolicy: RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
      });
    }

    // create origin access identity and grant read access to bucket
    const originAccessIdentity = new OriginAccessIdentity(this, `OriginAccessIdentity_${app}`);
    bucket.grantRead(originAccessIdentity);


    let distribution;

    if (branch === 'master' || branch === 'production') {
      // create cloudfront distribution pointing to index.html
      distribution = new Distribution(this, `Distribution_${app}`, {
        defaultRootObject: 'index.html',
        defaultBehavior: {
          origin: new S3Origin(bucket, { originAccessIdentity }),
          allowedMethods: AllowedMethods.ALLOW_ALL,
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        domainNames: config.domainNames,
        certificate: Certificate.fromCertificateArn(this, `Certificate_${app}`, config.certificateArn),
        minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
      });

      new CnameRecord(this, `Record_${app}`, {
        zone: HostedZone.fromHostedZoneAttributes(this, `Route53Zone_${app}`, {
          hostedZoneId: config.hostedZoneId, zoneName: config.zoneName,
        }),
        recordName: config.recordName,
        domainName: distribution.distributionDomainName,
      });
    } else {
      distribution = new Distribution(this, `Distribution_${app}`, {
        defaultRootObject: 'index.html',
        defaultBehavior: {
          origin: new S3Origin(bucket, { originAccessIdentity }),
          allowedMethods: AllowedMethods.ALLOW_ALL,
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
      });
    }

    try {
      // Deploy site contents to S3 bucket
      new BucketDeployment(this, `BucketDeployment_${app}`, {
        sources: [Source.asset(`../${distPath}`)],
        destinationBucket: bucket,
      });
    } catch (error) {
      if (distPath.includes(app)) {
        console.error(error);
      }
    }

    new CfnOutput(this, `DistributionURL_${app}`, {
      value: distribution.distributionDomainName,
      description: 'Domain of distribution.',
    });
  }
}
