import { Bucket } from 'aws-cdk-lib/aws-s3';
import { DeploymentConfiguration } from './deployment-configuration';

export interface AccessManagementConfiguration {
  /**
   * Handle access for the following s3 bucket.
   */
  readonly bucket: Bucket;

  /**
   * Further deployment properties.
   */
  readonly deploymentConfiguration?: DeploymentConfiguration;
}