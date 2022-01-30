import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import { filterSpecialCharacters, fromContext } from '../utils';
import { AccessManagement } from './access-management';
import { MicroFrontendConfiguration } from './micro-frontend-configuration';

/**
 * MicroFrontendStack deploys static files to a public s3 bucket
 */
export class MicroFrontend extends Construct {
  constructor(scope: Construct, id: string, props: MicroFrontendConfiguration) {
    super(scope, filterSpecialCharacters(id));

    const {
      app: preFormatApp,
      distPath,
      config,
      branchesWithRecords,
    } = props;

    // filter out special characters
    const app = filterSpecialCharacters(preFormatApp);

    // load branch
    const branch = fromContext(scope, 'branch');

    // create generic s3 bucket with private access control
    let bucket;
    if (branchesWithRecords?.includes(branch)) {
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

    let accessManagement;

    if (branchesWithRecords?.includes(branch)) {
      accessManagement = new AccessManagement(this, 'AccessManagement', {
        bucket,
        deploymentConfiguration: config,
      });
    } else {
      accessManagement = new AccessManagement(this, 'AccessManagement', {
        bucket,
      });
    }

    try {
      // Deploy site contents to S3 bucket
      new BucketDeployment(this, 'BucketDeployment', {
        sources: [Source.asset(distPath)],
        destinationBucket: bucket,
      });
    } catch (error) {
      if (distPath.includes(app)) {
        console.error(error);
      }
    }

    new CfnOutput(this, 'DistributionURL', {
      value: accessManagement.distribution.distributionDomainName,
      description: 'Domain of distribution.',
    });
  }
}
