export interface SwaggerConfiguration {
  /**
    * Name of bucket
    */
  readonly bucketName: string;

  /**
   * Path to asset to upload to s3 (Zipped Swagger documentation)
   */
  readonly path: string;
}