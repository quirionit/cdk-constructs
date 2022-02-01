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
import { Construct } from 'constructs';
import { AccessManagementConfiguration } from './access-management-configuration';

/**
 * The construct AccessManagement creates a CloudFront - Distribution pointing to a S3 - Bucket.
 * If deployment configuration is provided the CloudFront - Distribution will use an actual domain otherwise
 * a default domain is provided.
 */
export class AccessManagement extends Construct {

  readonly distribution: Distribution;

  constructor(scope: Construct, id: string, props: AccessManagementConfiguration) {
    super(scope, id);

    const {
      bucket,
      deploymentConfiguration,
    } = props;

    // create origin access identity and grant read access to bucket
    const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
    bucket.grantRead(originAccessIdentity);


    if (deploymentConfiguration) {
      // create cloudfront distribution pointing to index.html
      this.distribution = new Distribution(this, 'CloudFrontDistribution', {
        defaultRootObject: 'index.html',
        defaultBehavior: {
          origin: new S3Origin(bucket, { originAccessIdentity }),
          allowedMethods: AllowedMethods.ALLOW_ALL,
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        domainNames: deploymentConfiguration.domainNames,
        certificate: Certificate.fromCertificateArn(this, 'Certificate', deploymentConfiguration.certificateArn),
        minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
      });

      new CnameRecord(this, 'CNameRecord', {
        zone: HostedZone.fromHostedZoneAttributes(this, 'Route53Zone', {
          hostedZoneId: deploymentConfiguration.hostedZoneId, zoneName: deploymentConfiguration.zoneName,
        }),
        recordName: deploymentConfiguration.recordName,
        domainName: this.distribution.distributionDomainName,
      });
    } else {
      this.distribution = new Distribution(this, 'CloudFrontDistribution', {
        defaultRootObject: 'index.html',
        defaultBehavior: {
          origin: new S3Origin(bucket, { originAccessIdentity }),
          allowedMethods: AllowedMethods.ALLOW_ALL,
          viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
      });
    }
  }


}