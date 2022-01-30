# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessManagement <a name="AccessManagement" id="@quirion/cdk-constructs.AccessManagement"></a>

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


### MicroFrontend <a name="MicroFrontend" id="@quirion/cdk-constructs.MicroFrontend"></a>

MicroFrontendStack deploys static files to a public s3 bucket.

#### Initializers <a name="Initializers" id="@quirion/cdk-constructs.MicroFrontend.Initializer"></a>

```typescript
import { MicroFrontend } from '@quirion/cdk-constructs'

new MicroFrontend(scope: Construct, id: string, props: MicroFrontendConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.MicroFrontend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.MicroFrontend.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirion/cdk-constructs.MicroFrontend.Initializer.parameter.props">props</a></code> | <code><a href="#@quirion/cdk-constructs.MicroFrontendConfiguration">MicroFrontendConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirion/cdk-constructs.MicroFrontend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirion/cdk-constructs.MicroFrontend.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirion/cdk-constructs.MicroFrontend.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirion/cdk-constructs.MicroFrontendConfiguration">MicroFrontendConfiguration</a>

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

### MicroFrontendConfiguration <a name="MicroFrontendConfiguration" id="@quirion/cdk-constructs.MicroFrontendConfiguration"></a>

Additional props to create a new micro frontend stack.

#### Initializer <a name="Initializer" id="@quirion/cdk-constructs.MicroFrontendConfiguration.Initializer"></a>

```typescript
import { MicroFrontendConfiguration } from '@quirion/cdk-constructs'

const microFrontendConfiguration: MicroFrontendConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirion/cdk-constructs.MicroFrontendConfiguration.property.app">app</a></code> | <code>string</code> | Describes the name of the app. |
| <code><a href="#@quirion/cdk-constructs.MicroFrontendConfiguration.property.distPath">distPath</a></code> | <code>string</code> | Path to generated / built files. |
| <code><a href="#@quirion/cdk-constructs.MicroFrontendConfiguration.property.branchesWithRecords">branchesWithRecords</a></code> | <code>string[]</code> | All branches which should be deployed with given deployment configuration. |
| <code><a href="#@quirion/cdk-constructs.MicroFrontendConfiguration.property.config">config</a></code> | <code><a href="#@quirion/cdk-constructs.DeploymentConfiguration">DeploymentConfiguration</a></code> | Deployment configuration. |

---

##### `app`<sup>Required</sup> <a name="app" id="@quirion/cdk-constructs.MicroFrontendConfiguration.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Describes the name of the app.

---

##### `distPath`<sup>Required</sup> <a name="distPath" id="@quirion/cdk-constructs.MicroFrontendConfiguration.property.distPath"></a>

```typescript
public readonly distPath: string;
```

- *Type:* string

Path to generated / built files.

---

##### `branchesWithRecords`<sup>Optional</sup> <a name="branchesWithRecords" id="@quirion/cdk-constructs.MicroFrontendConfiguration.property.branchesWithRecords"></a>

```typescript
public readonly branchesWithRecords: string[];
```

- *Type:* string[]

All branches which should be deployed with given deployment configuration.

---

##### `config`<sup>Optional</sup> <a name="config" id="@quirion/cdk-constructs.MicroFrontendConfiguration.property.config"></a>

```typescript
public readonly config: DeploymentConfiguration;
```

- *Type:* <a href="#@quirion/cdk-constructs.DeploymentConfiguration">DeploymentConfiguration</a>

Deployment configuration.

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
| <code><a href="#@quirion/cdk-constructs.SingleTableDatastoreProps.property.options">options</a></code> | <code>any</code> | Optional extend deployment with more table props. |

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

Optional extend deployment with more table props.

Notice the injected config will override some.

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

