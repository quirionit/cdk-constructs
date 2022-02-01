import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { Bucket, BucketAccessControl } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import { filterSpecialCharacters, fromContext } from '../utils';
import { AccessManagement } from './access-management';
import { MicrofrontendConfiguration } from './microfrontend-configuration';

/**
 * Microfrontend deploys a static web app to S3 with a Cloudfront - Distribution.
 * @context branch - a string describing the current git - branch must be provided to handle feature deployment.
 *
 * TODO make to actual microfrontend.
 *  1. Create map in AWS containing all microfrontends with URL´s
 *  2. Provide endpoint / api to load said map
 *  3. Include logic to delete periodically feature deployments
 *  4. Provide webhook to delete stack on branch deletion
 */
export class Microfrontend extends Construct {
  constructor(scope: Construct, id: string, props: MicrofrontendConfiguration) {
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
