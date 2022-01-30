export interface DeploymentConfiguration {
  /**
   * List of domain names
   */
  readonly domainNames: string[];

  /**
   * HostedZoneId needed for deployment with CNameRecords
   */
  readonly hostedZoneId: string;

  /**
   * Zone name of record
   */
  readonly zoneName: string;

  /**
   * Name of record
   */
  readonly recordName: string;

  /**
   * Arn from certificate
   */
  readonly certificateArn: string;
}