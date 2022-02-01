# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessManagement <a name="AccessManagement" id="@quirion/cdk-constructs.AccessManagement"></a>

The construct AccessManagement creates a CloudFront - Distribution pointing to a S3 - Bucket.

If deployment configuration is provided the CloudFront - Distribution will use an actual domain otherwise a default domain is provided.

#### Initializers <a name="Initializers" id="@quirion/cdk-constructs.AccessManagement.Initializer"></a>

```typescript
import { AccessManagement } from '@quirion/cdk-constructs'

new AccessManagement(scope: Construct, id: string, props: AccessManagementConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.AccessManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.AccessManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.AccessManagement.Initializer.parameter.props">props</a></code> | <code><a href="#@quirion/cdk-constructs.AccessManagementConfiguration">AccessManagementConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirion/cdk-constructs.AccessManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirion/cdk-constructs.AccessManagement.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirion/cdk-constructs.AccessManagement.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirion/cdk-constructs.AccessManagementConfiguration">AccessManagementConfiguration</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.AccessManagement.property.distribution">distribution</a></code> | <code>aws-cdk-lib.aws_cloudfront.Distribution</code> | *No description.* |

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@quirion/cdk-constructs.AccessManagement.property.distribution"></a>

```typescript
public readonly distribution: Distribution;
```

- *Type:* aws-cdk-lib.aws_cloudfront.Distribution

---


### GoLambda <a name="GoLambda" id="@quirion/cdk-constructs.GoLambda"></a>

#### Initializers <a name="Initializers" id="@quirion/cdk-constructs.GoLambda.Initializer"></a>

```typescript
import { GoLambda } from '@quirion/cdk-constructs'

new GoLambda(scope: Construct, id: string, props: BaseLambdaConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.GoLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.GoLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.GoLambda.Initializer.parameter.props">props</a></code> | <code><a href="#@quirion/cdk-constructs.BaseLambdaConfiguration">BaseLambdaConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirion/cdk-constructs.GoLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirion/cdk-constructs.GoLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirion/cdk-constructs.GoLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirion/cdk-constructs.BaseLambdaConfiguration">BaseLambdaConfiguration</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.GoLambda.property.arnWithAlias">arnWithAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.GoLambda.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.GoLambda.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a></code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.GoLambda.property.shouldStoreArn">shouldStoreArn</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.GoLambda.property.policies">policies</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatementProps[]</code> | *No description.* |

---

##### `arnWithAlias`<sup>Required</sup> <a name="arnWithAlias" id="@quirion/cdk-constructs.GoLambda.property.arnWithAlias"></a>

```typescript
public readonly arnWithAlias: string;
```

- *Type:* string

---

##### `provisionedConcurrency`<sup>Required</sup> <a name="provisionedConcurrency" id="@quirion/cdk-constructs.GoLambda.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: boolean;
```

- *Type:* boolean

---

##### `provisionedConcurrencyConfig`<sup>Required</sup> <a name="provisionedConcurrencyConfig" id="@quirion/cdk-constructs.GoLambda.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;
```

- *Type:* <a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a>

---

##### `shouldStoreArn`<sup>Required</sup> <a name="shouldStoreArn" id="@quirion/cdk-constructs.GoLambda.property.shouldStoreArn"></a>

```typescript
public readonly shouldStoreArn: boolean;
```

- *Type:* boolean

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@quirion/cdk-constructs.GoLambda.property.policies"></a>

```typescript
public readonly policies: PolicyStatementProps[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps[]

---


### Microfrontend <a name="Microfrontend" id="@quirion/cdk-constructs.Microfrontend"></a>

Microfrontend deploys a static web app to S3 with a Cloudfront - Distribution.

#### Initializers <a name="Initializers" id="@quirion/cdk-constructs.Microfrontend.Initializer"></a>

```typescript
import { Microfrontend } from '@quirion/cdk-constructs'

new Microfrontend(scope: Construct, id: string, props: MicrofrontendConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.Microfrontend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.Microfrontend.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.Microfrontend.Initializer.parameter.props">props</a></code> | <code><a href="#@quirion/cdk-constructs.MicrofrontendConfiguration">MicrofrontendConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirion/cdk-constructs.Microfrontend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirion/cdk-constructs.Microfrontend.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirion/cdk-constructs.Microfrontend.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirion/cdk-constructs.MicrofrontendConfiguration">MicrofrontendConfiguration</a>

---





### NodeJsLambda <a name="NodeJsLambda" id="@quirion/cdk-constructs.NodeJsLambda"></a>

#### Initializers <a name="Initializers" id="@quirion/cdk-constructs.NodeJsLambda.Initializer"></a>

```typescript
import { NodeJsLambda } from '@quirion/cdk-constructs'

new NodeJsLambda(scope: Construct, id: string, props: BaseLambdaConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.NodeJsLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.NodeJsLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.NodeJsLambda.Initializer.parameter.props">props</a></code> | <code><a href="#@quirion/cdk-constructs.BaseLambdaConfiguration">BaseLambdaConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirion/cdk-constructs.NodeJsLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirion/cdk-constructs.NodeJsLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirion/cdk-constructs.NodeJsLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirion/cdk-constructs.BaseLambdaConfiguration">BaseLambdaConfiguration</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.NodeJsLambda.property.arnWithAlias">arnWithAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.NodeJsLambda.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.NodeJsLambda.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a></code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.NodeJsLambda.property.shouldStoreArn">shouldStoreArn</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.NodeJsLambda.property.policies">policies</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatementProps[]</code> | *No description.* |

---

##### `arnWithAlias`<sup>Required</sup> <a name="arnWithAlias" id="@quirion/cdk-constructs.NodeJsLambda.property.arnWithAlias"></a>

```typescript
public readonly arnWithAlias: string;
```

- *Type:* string

---

##### `provisionedConcurrency`<sup>Required</sup> <a name="provisionedConcurrency" id="@quirion/cdk-constructs.NodeJsLambda.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: boolean;
```

- *Type:* boolean

---

##### `provisionedConcurrencyConfig`<sup>Required</sup> <a name="provisionedConcurrencyConfig" id="@quirion/cdk-constructs.NodeJsLambda.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;
```

- *Type:* <a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a>

---

##### `shouldStoreArn`<sup>Required</sup> <a name="shouldStoreArn" id="@quirion/cdk-constructs.NodeJsLambda.property.shouldStoreArn"></a>

```typescript
public readonly shouldStoreArn: boolean;
```

- *Type:* boolean

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@quirion/cdk-constructs.NodeJsLambda.property.policies"></a>

```typescript
public readonly policies: PolicyStatementProps[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps[]

---


### SingleTableDatastore <a name="SingleTableDatastore" id="@quirion/cdk-constructs.SingleTableDatastore"></a>

Extends dynamodb - table and streamline creating dynamodb - tables following single - table - design.

> [https://www.alexdebrie.com/posts/dynamodb-single-table/](https://www.alexdebrie.com/posts/dynamodb-single-table/)

#### Initializers <a name="Initializers" id="@quirion/cdk-constructs.SingleTableDatastore.Initializer"></a>

```typescript
import { SingleTableDatastore } from '@quirion/cdk-constructs'

new SingleTableDatastore(scope: Construct, id: string, props?: SingleTableDatastoreProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.SingleTableDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.SingleTableDatastore.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.SingleTableDatastore.Initializer.parameter.props">props</a></code> | <code><a href="#@quirion/cdk-constructs.SingleTableDatastoreProps">SingleTableDatastoreProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirion/cdk-constructs.SingleTableDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirion/cdk-constructs.SingleTableDatastore.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@quirion/cdk-constructs.SingleTableDatastore.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirion/cdk-constructs.SingleTableDatastoreProps">SingleTableDatastoreProps</a>

---





### Swagger <a name="Swagger" id="@quirion/cdk-constructs.Swagger"></a>

Deploys a swagger json to a S3 - Bucket and exposes it.

#### Initializers <a name="Initializers" id="@quirion/cdk-constructs.Swagger.Initializer"></a>

```typescript
import { Swagger } from '@quirion/cdk-constructs'

new Swagger(scope: Construct, id: string, props: SwaggerConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.Swagger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.Swagger.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.Swagger.Initializer.parameter.props">props</a></code> | <code><a href="#@quirion/cdk-constructs.SwaggerConfiguration">SwaggerConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirion/cdk-constructs.Swagger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirion/cdk-constructs.Swagger.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirion/cdk-constructs.Swagger.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirion/cdk-constructs.SwaggerConfiguration">SwaggerConfiguration</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.Swagger.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@quirion/cdk-constructs.Swagger.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


## Structs <a name="Structs" id="Structs"></a>

### AccessManagementConfiguration <a name="AccessManagementConfiguration" id="@quirion/cdk-constructs.AccessManagementConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirion/cdk-constructs.AccessManagementConfiguration.Initializer"></a>

```typescript
import { AccessManagementConfiguration } from '@quirion/cdk-constructs'

const accessManagementConfiguration: AccessManagementConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.AccessManagementConfiguration.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | Handle access for the following s3 bucket. |
| <code><a href="#@quirion/cdk-constructs.AccessManagementConfiguration.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@quirion/cdk-constructs.DeploymentConfiguration">DeploymentConfiguration</a></code> | Further deployment properties. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@quirion/cdk-constructs.AccessManagementConfiguration.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

Handle access for the following s3 bucket.

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@quirion/cdk-constructs.AccessManagementConfiguration.property.deploymentConfiguration"></a>

```typescript
public readonly deploymentConfiguration: DeploymentConfiguration;
```

- *Type:* <a href="#@quirion/cdk-constructs.DeploymentConfiguration">DeploymentConfiguration</a>

Further deployment properties.

---

### BaseLambdaConfiguration <a name="BaseLambdaConfiguration" id="@quirion/cdk-constructs.BaseLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirion/cdk-constructs.BaseLambdaConfiguration.Initializer"></a>

```typescript
import { BaseLambdaConfiguration } from '@quirion/cdk-constructs'

const baseLambdaConfiguration: BaseLambdaConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.BaseLambdaConfiguration.property.functionProps">functionProps</a></code> | <code>aws-cdk-lib.aws_lambda.FunctionOptions</code> | Should hand in regular function props. |
| <code><a href="#@quirion/cdk-constructs.BaseLambdaConfiguration.property.policies">policies</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatementProps[]</code> | List of policy - statements which will be attached to lambda. |
| <code><a href="#@quirion/cdk-constructs.BaseLambdaConfiguration.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>boolean</code> | Activate concurrent provisioning (default: false). |
| <code><a href="#@quirion/cdk-constructs.BaseLambdaConfiguration.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a></code> | Override default configuration for provisioned concurrency default:. |
| <code><a href="#@quirion/cdk-constructs.BaseLambdaConfiguration.property.shouldStoreArn">shouldStoreArn</a></code> | <code>boolean</code> | Should save lambda arn as ssm - parameter (default: false). |

---

##### `functionProps`<sup>Required</sup> <a name="functionProps" id="@quirion/cdk-constructs.BaseLambdaConfiguration.property.functionProps"></a>

```typescript
public readonly functionProps: FunctionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.FunctionOptions

Should hand in regular function props.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@quirion/cdk-constructs.BaseLambdaConfiguration.property.policies"></a>

```typescript
public readonly policies: PolicyStatementProps[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps[]

List of policy - statements which will be attached to lambda.

---

##### `provisionedConcurrency`<sup>Optional</sup> <a name="provisionedConcurrency" id="@quirion/cdk-constructs.BaseLambdaConfiguration.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: boolean;
```

- *Type:* boolean

Activate concurrent provisioning (default: false).

---

##### `provisionedConcurrencyConfig`<sup>Optional</sup> <a name="provisionedConcurrencyConfig" id="@quirion/cdk-constructs.BaseLambdaConfiguration.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;
```

- *Type:* <a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a>

Override default configuration for provisioned concurrency default:.

> [DefaultConfiguration](DefaultConfiguration)

---

##### `shouldStoreArn`<sup>Optional</sup> <a name="shouldStoreArn" id="@quirion/cdk-constructs.BaseLambdaConfiguration.property.shouldStoreArn"></a>

```typescript
public readonly shouldStoreArn: boolean;
```

- *Type:* boolean

Should save lambda arn as ssm - parameter (default: false).

---

### DeploymentConfiguration <a name="DeploymentConfiguration" id="@quirion/cdk-constructs.DeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirion/cdk-constructs.DeploymentConfiguration.Initializer"></a>

```typescript
import { DeploymentConfiguration } from '@quirion/cdk-constructs'

const deploymentConfiguration: DeploymentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.DeploymentConfiguration.property.certificateArn">certificateArn</a></code> | <code>string</code> | Arn from certificate. |
| <code><a href="#@quirion/cdk-constructs.DeploymentConfiguration.property.domainNames">domainNames</a></code> | <code>string[]</code> | List of domain names. |
| <code><a href="#@quirion/cdk-constructs.DeploymentConfiguration.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | HostedZoneId needed for deployment with CNameRecords. |
| <code><a href="#@quirion/cdk-constructs.DeploymentConfiguration.property.recordName">recordName</a></code> | <code>string</code> | Name of record. |
| <code><a href="#@quirion/cdk-constructs.DeploymentConfiguration.property.zoneName">zoneName</a></code> | <code>string</code> | Zone name of record. |

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@quirion/cdk-constructs.DeploymentConfiguration.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Arn from certificate.

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@quirion/cdk-constructs.DeploymentConfiguration.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

List of domain names.

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@quirion/cdk-constructs.DeploymentConfiguration.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

HostedZoneId needed for deployment with CNameRecords.

---

##### `recordName`<sup>Required</sup> <a name="recordName" id="@quirion/cdk-constructs.DeploymentConfiguration.property.recordName"></a>

```typescript
public readonly recordName: string;
```

- *Type:* string

Name of record.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@quirion/cdk-constructs.DeploymentConfiguration.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Zone name of record.

---

### MicrofrontendConfiguration <a name="MicrofrontendConfiguration" id="@quirion/cdk-constructs.MicrofrontendConfiguration"></a>

Additional props to create a new micro frontend stack.

#### Initializer <a name="Initializer" id="@quirion/cdk-constructs.MicrofrontendConfiguration.Initializer"></a>

```typescript
import { MicrofrontendConfiguration } from '@quirion/cdk-constructs'

const microfrontendConfiguration: MicrofrontendConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.MicrofrontendConfiguration.property.app">app</a></code> | <code>string</code> | Describes the name of the app. |
| <code><a href="#@quirion/cdk-constructs.MicrofrontendConfiguration.property.distPath">distPath</a></code> | <code>string</code> | Path to generated / built files. |
| <code><a href="#@quirion/cdk-constructs.MicrofrontendConfiguration.property.branchesWithRecords">branchesWithRecords</a></code> | <code>string[]</code> | All branches which should be deployed with given deployment configuration. |
| <code><a href="#@quirion/cdk-constructs.MicrofrontendConfiguration.property.config">config</a></code> | <code><a href="#@quirion/cdk-constructs.DeploymentConfiguration">DeploymentConfiguration</a></code> | Deployment configuration. |

---

##### `app`<sup>Required</sup> <a name="app" id="@quirion/cdk-constructs.MicrofrontendConfiguration.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Describes the name of the app.

---

##### `distPath`<sup>Required</sup> <a name="distPath" id="@quirion/cdk-constructs.MicrofrontendConfiguration.property.distPath"></a>

```typescript
public readonly distPath: string;
```

- *Type:* string

Path to generated / built files.

---

##### `branchesWithRecords`<sup>Optional</sup> <a name="branchesWithRecords" id="@quirion/cdk-constructs.MicrofrontendConfiguration.property.branchesWithRecords"></a>

```typescript
public readonly branchesWithRecords: string[];
```

- *Type:* string[]

All branches which should be deployed with given deployment configuration.

---

##### `config`<sup>Optional</sup> <a name="config" id="@quirion/cdk-constructs.MicrofrontendConfiguration.property.config"></a>

```typescript
public readonly config: DeploymentConfiguration;
```

- *Type:* <a href="#@quirion/cdk-constructs.DeploymentConfiguration">DeploymentConfiguration</a>

Deployment configuration.

---

### ProvisionedConcurrencyConfiguration <a name="ProvisionedConcurrencyConfiguration" id="@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration"></a>

Configuration for provisioned concurrency.

#### Initializer <a name="Initializer" id="@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration.Initializer"></a>

```typescript
import { ProvisionedConcurrencyConfiguration } from '@quirion/cdk-constructs'

const provisionedConcurrencyConfiguration: ProvisionedConcurrencyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration.property.from">from</a></code> | <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a></code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration.property.to">to</a></code> | <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a></code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration.property.utilizationTarget">utilizationTarget</a></code> | <code>number</code> | *No description.* |

---

##### `from`<sup>Required</sup> <a name="from" id="@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration.property.from"></a>

```typescript
public readonly from: ProvisionedConcurrencyConfigurationTime;
```

- *Type:* <a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a>

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `to`<sup>Required</sup> <a name="to" id="@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration.property.to"></a>

```typescript
public readonly to: ProvisionedConcurrencyConfigurationTime;
```

- *Type:* <a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a>

---

##### `utilizationTarget`<sup>Required</sup> <a name="utilizationTarget" id="@quirion/cdk-constructs.ProvisionedConcurrencyConfiguration.property.utilizationTarget"></a>

```typescript
public readonly utilizationTarget: number;
```

- *Type:* number

---

### ProvisionedConcurrencyConfigurationTime <a name="ProvisionedConcurrencyConfigurationTime" id="@quirion/cdk-constructs.ProvisionedConcurrencyConfigurationTime"></a>

Time for provisioned concurrency (from - to).

#### Initializer <a name="Initializer" id="@quirion/cdk-constructs.ProvisionedConcurrencyConfigurationTime.Initializer"></a>

```typescript
import { ProvisionedConcurrencyConfigurationTime } from '@quirion/cdk-constructs'

const provisionedConcurrencyConfigurationTime: ProvisionedConcurrencyConfigurationTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.hour">hour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.minute">minute</a></code> | <code>string</code> | *No description.* |

---

##### `hour`<sup>Required</sup> <a name="hour" id="@quirion/cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.hour"></a>

```typescript
public readonly hour: string;
```

- *Type:* string

---

##### `minute`<sup>Required</sup> <a name="minute" id="@quirion/cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.minute"></a>

```typescript
public readonly minute: string;
```

- *Type:* string

---

### SingleTableDatastoreProps <a name="SingleTableDatastoreProps" id="@quirion/cdk-constructs.SingleTableDatastoreProps"></a>

#### Initializer <a name="Initializer" id="@quirion/cdk-constructs.SingleTableDatastoreProps.Initializer"></a>

```typescript
import { SingleTableDatastoreProps } from '@quirion/cdk-constructs'

const singleTableDatastoreProps: SingleTableDatastoreProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.SingleTableDatastoreProps.property.tableName">tableName</a></code> | <code>string</code> | Mandatory table name. |
| <code><a href="#@quirion/cdk-constructs.SingleTableDatastoreProps.property.options">options</a></code> | <code>any</code> | TODO figure out how to use TableProps but every attribute is optional. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@quirion/cdk-constructs.SingleTableDatastoreProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Mandatory table name.

---

##### `options`<sup>Optional</sup> <a name="options" id="@quirion/cdk-constructs.SingleTableDatastoreProps.property.options"></a>

```typescript
public readonly options: any;
```

- *Type:* any

TODO figure out how to use TableProps but every attribute is optional.

Optional extend deployment with more table props. Notice the injected config will override some.

> [Configuration](Configuration)

---

### SwaggerConfiguration <a name="SwaggerConfiguration" id="@quirion/cdk-constructs.SwaggerConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirion/cdk-constructs.SwaggerConfiguration.Initializer"></a>

```typescript
import { SwaggerConfiguration } from '@quirion/cdk-constructs'

const swaggerConfiguration: SwaggerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.SwaggerConfiguration.property.bucketName">bucketName</a></code> | <code>string</code> | Name of bucket. |
| <code><a href="#@quirion/cdk-constructs.SwaggerConfiguration.property.path">path</a></code> | <code>string</code> | Path to asset to upload to s3 (Zipped Swagger documentation). |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@quirion/cdk-constructs.SwaggerConfiguration.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Name of bucket.

---

##### `path`<sup>Required</sup> <a name="path" id="@quirion/cdk-constructs.SwaggerConfiguration.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to asset to upload to s3 (Zipped Swagger documentation).

---



## Enums <a name="Enums" id="Enums"></a>

### Stage <a name="Stage" id="@quirion/cdk-constructs.Stage"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@quirion/cdk-constructs.Stage.DEVELOPMENT">DEVELOPMENT</a></code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.Stage.PRODUCTION">PRODUCTION</a></code> | *No description.* |

---

Aws stages names.

#### `DEVELOPMENT` <a name="DEVELOPMENT" id="@quirion/cdk-constructs.Stage.DEVELOPMENT"></a>

---


#### `PRODUCTION` <a name="PRODUCTION" id="@quirion/cdk-constructs.Stage.PRODUCTION"></a>

---

