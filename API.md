# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessManagement <a name="AccessManagement" id="@quirionit/cdk-constructs.AccessManagement"></a>

The construct AccessManagement creates a CloudFront - Distribution pointing to a S3 - Bucket.

If deployment configuration is provided the CloudFront - Distribution will use an actual domain otherwise a default domain is provided.

#### Initializers <a name="Initializers" id="@quirionit/cdk-constructs.AccessManagement.Initializer"></a>

```typescript
import { AccessManagement } from '@quirionit/cdk-constructs'

new AccessManagement(scope: Construct, id: string, props: AccessManagementConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.AccessManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.AccessManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.AccessManagement.Initializer.parameter.props">props</a></code> | <code><a href="#@quirionit/cdk-constructs.AccessManagementConfiguration">AccessManagementConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirionit/cdk-constructs.AccessManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirionit/cdk-constructs.AccessManagement.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirionit/cdk-constructs.AccessManagement.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirionit/cdk-constructs.AccessManagementConfiguration">AccessManagementConfiguration</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.AccessManagement.property.distribution">distribution</a></code> | <code>aws-cdk-lib.aws_cloudfront.Distribution</code> | *No description.* |

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@quirionit/cdk-constructs.AccessManagement.property.distribution"></a>

```typescript
public readonly distribution: Distribution;
```

- *Type:* aws-cdk-lib.aws_cloudfront.Distribution

---


### BaseApi <a name="BaseApi" id="@quirionit/cdk-constructs.BaseApi"></a>

A small extension to the HttpApi.

Creates per default stage "v1" and configures CORS.

> [BaseApiDefaultConfiguration](BaseApiDefaultConfiguration)

#### Initializers <a name="Initializers" id="@quirionit/cdk-constructs.BaseApi.Initializer"></a>

```typescript
import { BaseApi } from '@quirionit/cdk-constructs'

new BaseApi(scope: Construct, id: string, props: HttpApiProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.BaseApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.BaseApi.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.BaseApi.Initializer.parameter.props">props</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.HttpApiProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirionit/cdk-constructs.BaseApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirionit/cdk-constructs.BaseApi.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirionit/cdk-constructs.BaseApi.Initializer.parameter.props"></a>

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.HttpApiProps

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.BaseApi.property.authorizer">authorizer</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.IHttpRouteAuthorizer</code> | *No description.* |

---

##### `authorizer`<sup>Optional</sup> <a name="authorizer" id="@quirionit/cdk-constructs.BaseApi.property.authorizer"></a>

```typescript
public readonly authorizer: IHttpRouteAuthorizer;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.IHttpRouteAuthorizer

---


### GoLambda <a name="GoLambda" id="@quirionit/cdk-constructs.GoLambda"></a>

#### Initializers <a name="Initializers" id="@quirionit/cdk-constructs.GoLambda.Initializer"></a>

```typescript
import { GoLambda } from '@quirionit/cdk-constructs'

new GoLambda(scope: Construct, id: string, props: GoLambdaConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.GoLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.GoLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.GoLambda.Initializer.parameter.props">props</a></code> | <code><a href="#@quirionit/cdk-constructs.GoLambdaConfiguration">GoLambdaConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirionit/cdk-constructs.GoLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirionit/cdk-constructs.GoLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirionit/cdk-constructs.GoLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirionit/cdk-constructs.GoLambdaConfiguration">GoLambdaConfiguration</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.GoLambda.property.arnWithAlias">arnWithAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.GoLambda.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.GoLambda.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a></code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.GoLambda.property.shouldStoreArn">shouldStoreArn</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.GoLambda.property.policies">policies</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatementProps[]</code> | *No description.* |

---

##### `arnWithAlias`<sup>Required</sup> <a name="arnWithAlias" id="@quirionit/cdk-constructs.GoLambda.property.arnWithAlias"></a>

```typescript
public readonly arnWithAlias: string;
```

- *Type:* string

---

##### `provisionedConcurrency`<sup>Required</sup> <a name="provisionedConcurrency" id="@quirionit/cdk-constructs.GoLambda.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: boolean;
```

- *Type:* boolean

---

##### `provisionedConcurrencyConfig`<sup>Required</sup> <a name="provisionedConcurrencyConfig" id="@quirionit/cdk-constructs.GoLambda.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a>

---

##### `shouldStoreArn`<sup>Required</sup> <a name="shouldStoreArn" id="@quirionit/cdk-constructs.GoLambda.property.shouldStoreArn"></a>

```typescript
public readonly shouldStoreArn: boolean;
```

- *Type:* boolean

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@quirionit/cdk-constructs.GoLambda.property.policies"></a>

```typescript
public readonly policies: PolicyStatementProps[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps[]

---


### Microfrontend <a name="Microfrontend" id="@quirionit/cdk-constructs.Microfrontend"></a>

Microfrontend deploys a static web app to S3 with a Cloudfront - Distribution.

#### Initializers <a name="Initializers" id="@quirionit/cdk-constructs.Microfrontend.Initializer"></a>

```typescript
import { Microfrontend } from '@quirionit/cdk-constructs'

new Microfrontend(scope: Construct, id: string, props: MicrofrontendConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.Microfrontend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Microfrontend.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Microfrontend.Initializer.parameter.props">props</a></code> | <code><a href="#@quirionit/cdk-constructs.MicrofrontendConfiguration">MicrofrontendConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirionit/cdk-constructs.Microfrontend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirionit/cdk-constructs.Microfrontend.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirionit/cdk-constructs.Microfrontend.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirionit/cdk-constructs.MicrofrontendConfiguration">MicrofrontendConfiguration</a>

---





### Microservice <a name="Microservice" id="@quirionit/cdk-constructs.Microservice"></a>

Serverless microservice based on lambda - functions.

#### Initializers <a name="Initializers" id="@quirionit/cdk-constructs.Microservice.Initializer"></a>

```typescript
import { Microservice } from '@quirionit/cdk-constructs'

new Microservice(scope: Construct, id: string, props: MicroserviceConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.Microservice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Microservice.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Microservice.Initializer.parameter.props">props</a></code> | <code><a href="#@quirionit/cdk-constructs.MicroserviceConfiguration">MicroserviceConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirionit/cdk-constructs.Microservice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirionit/cdk-constructs.Microservice.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirionit/cdk-constructs.Microservice.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirionit/cdk-constructs.MicroserviceConfiguration">MicroserviceConfiguration</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@quirionit/cdk-constructs.Microservice.newLambda">newLambda</a></code> | Add new Lambda to microservice. |

---

##### `newLambda` <a name="newLambda" id="@quirionit/cdk-constructs.Microservice.newLambda"></a>

```typescript
public newLambda(props: NewLambdaConfiguration)
```

###### `props`<sup>Required</sup> <a name="props" id="@quirionit/cdk-constructs.Microservice.newLambda.parameter.props"></a>

- *Type:* <a href="#@quirionit/cdk-constructs.NewLambdaConfiguration">NewLambdaConfiguration</a>

MicroserviceNewLambdaProps.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.Microservice.property.lambdas">lambdas</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_lambda.Function}</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Microservice.property.api">api</a></code> | <code><a href="#@quirionit/cdk-constructs.BaseApi">BaseApi</a></code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Microservice.property.dataStore">dataStore</a></code> | <code><a href="#@quirionit/cdk-constructs.SingleTableDatastore">SingleTableDatastore</a></code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Microservice.property.eventStore">eventStore</a></code> | <code><a href="#@quirionit/cdk-constructs.SingleTableDatastore">SingleTableDatastore</a></code> | *No description.* |

---

##### `lambdas`<sup>Required</sup> <a name="lambdas" id="@quirionit/cdk-constructs.Microservice.property.lambdas"></a>

```typescript
public readonly lambdas: {[ key: string ]: Function};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_lambda.Function}

---

##### `api`<sup>Optional</sup> <a name="api" id="@quirionit/cdk-constructs.Microservice.property.api"></a>

```typescript
public readonly api: BaseApi;
```

- *Type:* <a href="#@quirionit/cdk-constructs.BaseApi">BaseApi</a>

---

##### `dataStore`<sup>Optional</sup> <a name="dataStore" id="@quirionit/cdk-constructs.Microservice.property.dataStore"></a>

```typescript
public readonly dataStore: SingleTableDatastore;
```

- *Type:* <a href="#@quirionit/cdk-constructs.SingleTableDatastore">SingleTableDatastore</a>

---

##### `eventStore`<sup>Optional</sup> <a name="eventStore" id="@quirionit/cdk-constructs.Microservice.property.eventStore"></a>

```typescript
public readonly eventStore: SingleTableDatastore;
```

- *Type:* <a href="#@quirionit/cdk-constructs.SingleTableDatastore">SingleTableDatastore</a>

---


### NodeJsLambda <a name="NodeJsLambda" id="@quirionit/cdk-constructs.NodeJsLambda"></a>

#### Initializers <a name="Initializers" id="@quirionit/cdk-constructs.NodeJsLambda.Initializer"></a>

```typescript
import { NodeJsLambda } from '@quirionit/cdk-constructs'

new NodeJsLambda(scope: Construct, id: string, props: NodejsLambdaConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.NodeJsLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.NodeJsLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.NodeJsLambda.Initializer.parameter.props">props</a></code> | <code><a href="#@quirionit/cdk-constructs.NodejsLambdaConfiguration">NodejsLambdaConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirionit/cdk-constructs.NodeJsLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirionit/cdk-constructs.NodeJsLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirionit/cdk-constructs.NodeJsLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirionit/cdk-constructs.NodejsLambdaConfiguration">NodejsLambdaConfiguration</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.NodeJsLambda.property.arnWithAlias">arnWithAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.NodeJsLambda.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.NodeJsLambda.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a></code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.NodeJsLambda.property.shouldStoreArn">shouldStoreArn</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.NodeJsLambda.property.policies">policies</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatementProps[]</code> | *No description.* |

---

##### `arnWithAlias`<sup>Required</sup> <a name="arnWithAlias" id="@quirionit/cdk-constructs.NodeJsLambda.property.arnWithAlias"></a>

```typescript
public readonly arnWithAlias: string;
```

- *Type:* string

---

##### `provisionedConcurrency`<sup>Required</sup> <a name="provisionedConcurrency" id="@quirionit/cdk-constructs.NodeJsLambda.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: boolean;
```

- *Type:* boolean

---

##### `provisionedConcurrencyConfig`<sup>Required</sup> <a name="provisionedConcurrencyConfig" id="@quirionit/cdk-constructs.NodeJsLambda.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a>

---

##### `shouldStoreArn`<sup>Required</sup> <a name="shouldStoreArn" id="@quirionit/cdk-constructs.NodeJsLambda.property.shouldStoreArn"></a>

```typescript
public readonly shouldStoreArn: boolean;
```

- *Type:* boolean

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@quirionit/cdk-constructs.NodeJsLambda.property.policies"></a>

```typescript
public readonly policies: PolicyStatementProps[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps[]

---


### SingleTableDatastore <a name="SingleTableDatastore" id="@quirionit/cdk-constructs.SingleTableDatastore"></a>

Extends dynamodb - table and streamline creating dynamodb - tables following single - table - design.

> [https://www.alexdebrie.com/posts/dynamodb-single-table/](https://www.alexdebrie.com/posts/dynamodb-single-table/)

#### Initializers <a name="Initializers" id="@quirionit/cdk-constructs.SingleTableDatastore.Initializer"></a>

```typescript
import { SingleTableDatastore } from '@quirionit/cdk-constructs'

new SingleTableDatastore(scope: Construct, id: string, props?: SingleTableDatastoreProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.SingleTableDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.SingleTableDatastore.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.SingleTableDatastore.Initializer.parameter.props">props</a></code> | <code><a href="#@quirionit/cdk-constructs.SingleTableDatastoreProps">SingleTableDatastoreProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirionit/cdk-constructs.SingleTableDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirionit/cdk-constructs.SingleTableDatastore.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@quirionit/cdk-constructs.SingleTableDatastore.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirionit/cdk-constructs.SingleTableDatastoreProps">SingleTableDatastoreProps</a>

---





### Swagger <a name="Swagger" id="@quirionit/cdk-constructs.Swagger"></a>

Deploys a swagger json to a S3 - Bucket and exposes it.

#### Initializers <a name="Initializers" id="@quirionit/cdk-constructs.Swagger.Initializer"></a>

```typescript
import { Swagger } from '@quirionit/cdk-constructs'

new Swagger(scope: Construct, id: string, props: SwaggerConfiguration)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.Swagger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Swagger.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Swagger.Initializer.parameter.props">props</a></code> | <code><a href="#@quirionit/cdk-constructs.SwaggerConfiguration">SwaggerConfiguration</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@quirionit/cdk-constructs.Swagger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@quirionit/cdk-constructs.Swagger.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@quirionit/cdk-constructs.Swagger.Initializer.parameter.props"></a>

- *Type:* <a href="#@quirionit/cdk-constructs.SwaggerConfiguration">SwaggerConfiguration</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.Swagger.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@quirionit/cdk-constructs.Swagger.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


## Structs <a name="Structs" id="Structs"></a>

### AccessManagementConfiguration <a name="AccessManagementConfiguration" id="@quirionit/cdk-constructs.AccessManagementConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.AccessManagementConfiguration.Initializer"></a>

```typescript
import { AccessManagementConfiguration } from '@quirionit/cdk-constructs'

const accessManagementConfiguration: AccessManagementConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.AccessManagementConfiguration.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | Handle access for the following s3 bucket. |
| <code><a href="#@quirionit/cdk-constructs.AccessManagementConfiguration.property.deploymentConfiguration">deploymentConfiguration</a></code> | <code><a href="#@quirionit/cdk-constructs.DeploymentConfiguration">DeploymentConfiguration</a></code> | Further deployment properties. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@quirionit/cdk-constructs.AccessManagementConfiguration.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

Handle access for the following s3 bucket.

---

##### `deploymentConfiguration`<sup>Optional</sup> <a name="deploymentConfiguration" id="@quirionit/cdk-constructs.AccessManagementConfiguration.property.deploymentConfiguration"></a>

```typescript
public readonly deploymentConfiguration: DeploymentConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.DeploymentConfiguration">DeploymentConfiguration</a>

Further deployment properties.

---

### ApiConfiguration <a name="ApiConfiguration" id="@quirionit/cdk-constructs.ApiConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.ApiConfiguration.Initializer"></a>

```typescript
import { ApiConfiguration } from '@quirionit/cdk-constructs'

const apiConfiguration: ApiConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.ApiConfiguration.property.public">public</a></code> | <code>boolean</code> | Should it be public (or internal use only). |
| <code><a href="#@quirionit/cdk-constructs.ApiConfiguration.property.swagger">swagger</a></code> | <code><a href="#@quirionit/cdk-constructs.SwaggerConfiguration">SwaggerConfiguration</a></code> | Should create and publish swagger documentation. |

---

##### `public`<sup>Required</sup> <a name="public" id="@quirionit/cdk-constructs.ApiConfiguration.property.public"></a>

```typescript
public readonly public: boolean;
```

- *Type:* boolean

Should it be public (or internal use only).

---

##### `swagger`<sup>Optional</sup> <a name="swagger" id="@quirionit/cdk-constructs.ApiConfiguration.property.swagger"></a>

```typescript
public readonly swagger: SwaggerConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.SwaggerConfiguration">SwaggerConfiguration</a>

Should create and publish swagger documentation.

---

### BaseLambdaConfiguration <a name="BaseLambdaConfiguration" id="@quirionit/cdk-constructs.BaseLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.BaseLambdaConfiguration.Initializer"></a>

```typescript
import { BaseLambdaConfiguration } from '@quirionit/cdk-constructs'

const baseLambdaConfiguration: BaseLambdaConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.BaseLambdaConfiguration.property.policies">policies</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatementProps[]</code> | List of policy - statements which will be attached to lambda. |
| <code><a href="#@quirionit/cdk-constructs.BaseLambdaConfiguration.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>boolean</code> | Activate concurrent provisioning (default: false). |
| <code><a href="#@quirionit/cdk-constructs.BaseLambdaConfiguration.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a></code> | Override default configuration for provisioned concurrency default:. |
| <code><a href="#@quirionit/cdk-constructs.BaseLambdaConfiguration.property.shouldStoreArn">shouldStoreArn</a></code> | <code>boolean</code> | Should save lambda arn as ssm - parameter (default: false). |

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@quirionit/cdk-constructs.BaseLambdaConfiguration.property.policies"></a>

```typescript
public readonly policies: PolicyStatementProps[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps[]

List of policy - statements which will be attached to lambda.

---

##### `provisionedConcurrency`<sup>Optional</sup> <a name="provisionedConcurrency" id="@quirionit/cdk-constructs.BaseLambdaConfiguration.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: boolean;
```

- *Type:* boolean

Activate concurrent provisioning (default: false).

---

##### `provisionedConcurrencyConfig`<sup>Optional</sup> <a name="provisionedConcurrencyConfig" id="@quirionit/cdk-constructs.BaseLambdaConfiguration.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a>

Override default configuration for provisioned concurrency default:.

> [DefaultConfiguration](DefaultConfiguration)

---

##### `shouldStoreArn`<sup>Optional</sup> <a name="shouldStoreArn" id="@quirionit/cdk-constructs.BaseLambdaConfiguration.property.shouldStoreArn"></a>

```typescript
public readonly shouldStoreArn: boolean;
```

- *Type:* boolean

Should save lambda arn as ssm - parameter (default: false).

---

### DeploymentConfiguration <a name="DeploymentConfiguration" id="@quirionit/cdk-constructs.DeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.DeploymentConfiguration.Initializer"></a>

```typescript
import { DeploymentConfiguration } from '@quirionit/cdk-constructs'

const deploymentConfiguration: DeploymentConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.DeploymentConfiguration.property.certificateArn">certificateArn</a></code> | <code>string</code> | Arn from certificate. |
| <code><a href="#@quirionit/cdk-constructs.DeploymentConfiguration.property.domainNames">domainNames</a></code> | <code>string[]</code> | List of domain names. |
| <code><a href="#@quirionit/cdk-constructs.DeploymentConfiguration.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | HostedZoneId needed for deployment with CNameRecords. |
| <code><a href="#@quirionit/cdk-constructs.DeploymentConfiguration.property.recordName">recordName</a></code> | <code>string</code> | Name of record. |
| <code><a href="#@quirionit/cdk-constructs.DeploymentConfiguration.property.zoneName">zoneName</a></code> | <code>string</code> | Zone name of record. |

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@quirionit/cdk-constructs.DeploymentConfiguration.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Arn from certificate.

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@quirionit/cdk-constructs.DeploymentConfiguration.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

List of domain names.

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@quirionit/cdk-constructs.DeploymentConfiguration.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

HostedZoneId needed for deployment with CNameRecords.

---

##### `recordName`<sup>Required</sup> <a name="recordName" id="@quirionit/cdk-constructs.DeploymentConfiguration.property.recordName"></a>

```typescript
public readonly recordName: string;
```

- *Type:* string

Name of record.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@quirionit/cdk-constructs.DeploymentConfiguration.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Zone name of record.

---

### GoLambdaConfiguration <a name="GoLambdaConfiguration" id="@quirionit/cdk-constructs.GoLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.GoLambdaConfiguration.Initializer"></a>

```typescript
import { GoLambdaConfiguration } from '@quirionit/cdk-constructs'

const goLambdaConfiguration: GoLambdaConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.GoLambdaConfiguration.property.policies">policies</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatementProps[]</code> | List of policy - statements which will be attached to lambda. |
| <code><a href="#@quirionit/cdk-constructs.GoLambdaConfiguration.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>boolean</code> | Activate concurrent provisioning (default: false). |
| <code><a href="#@quirionit/cdk-constructs.GoLambdaConfiguration.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a></code> | Override default configuration for provisioned concurrency default:. |
| <code><a href="#@quirionit/cdk-constructs.GoLambdaConfiguration.property.shouldStoreArn">shouldStoreArn</a></code> | <code>boolean</code> | Should save lambda arn as ssm - parameter (default: false). |
| <code><a href="#@quirionit/cdk-constructs.GoLambdaConfiguration.property.functionProps">functionProps</a></code> | <code>@aws-cdk/aws-lambda-go-alpha.GoFunctionProps</code> | Should hand in regular function props. |

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@quirionit/cdk-constructs.GoLambdaConfiguration.property.policies"></a>

```typescript
public readonly policies: PolicyStatementProps[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps[]

List of policy - statements which will be attached to lambda.

---

##### `provisionedConcurrency`<sup>Optional</sup> <a name="provisionedConcurrency" id="@quirionit/cdk-constructs.GoLambdaConfiguration.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: boolean;
```

- *Type:* boolean

Activate concurrent provisioning (default: false).

---

##### `provisionedConcurrencyConfig`<sup>Optional</sup> <a name="provisionedConcurrencyConfig" id="@quirionit/cdk-constructs.GoLambdaConfiguration.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a>

Override default configuration for provisioned concurrency default:.

> [DefaultConfiguration](DefaultConfiguration)

---

##### `shouldStoreArn`<sup>Optional</sup> <a name="shouldStoreArn" id="@quirionit/cdk-constructs.GoLambdaConfiguration.property.shouldStoreArn"></a>

```typescript
public readonly shouldStoreArn: boolean;
```

- *Type:* boolean

Should save lambda arn as ssm - parameter (default: false).

---

##### `functionProps`<sup>Optional</sup> <a name="functionProps" id="@quirionit/cdk-constructs.GoLambdaConfiguration.property.functionProps"></a>

```typescript
public readonly functionProps: GoFunctionProps;
```

- *Type:* @aws-cdk/aws-lambda-go-alpha.GoFunctionProps

Should hand in regular function props.

---

### MicrofrontendConfiguration <a name="MicrofrontendConfiguration" id="@quirionit/cdk-constructs.MicrofrontendConfiguration"></a>

Additional props to create a new micro frontend stack.

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.MicrofrontendConfiguration.Initializer"></a>

```typescript
import { MicrofrontendConfiguration } from '@quirionit/cdk-constructs'

const microfrontendConfiguration: MicrofrontendConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.MicrofrontendConfiguration.property.app">app</a></code> | <code>string</code> | Describes the name of the app. |
| <code><a href="#@quirionit/cdk-constructs.MicrofrontendConfiguration.property.distPath">distPath</a></code> | <code>string</code> | Path to generated / built files. |
| <code><a href="#@quirionit/cdk-constructs.MicrofrontendConfiguration.property.branchesWithRecords">branchesWithRecords</a></code> | <code>string[]</code> | All branches which should be deployed with given deployment configuration. |
| <code><a href="#@quirionit/cdk-constructs.MicrofrontendConfiguration.property.config">config</a></code> | <code><a href="#@quirionit/cdk-constructs.DeploymentConfiguration">DeploymentConfiguration</a></code> | Deployment configuration. |
| <code><a href="#@quirionit/cdk-constructs.MicrofrontendConfiguration.property.distribution">distribution</a></code> | <code>boolean</code> | Whether the bucket should be deployed with a cloudfront - distribution. |

---

##### `app`<sup>Required</sup> <a name="app" id="@quirionit/cdk-constructs.MicrofrontendConfiguration.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Describes the name of the app.

---

##### `distPath`<sup>Required</sup> <a name="distPath" id="@quirionit/cdk-constructs.MicrofrontendConfiguration.property.distPath"></a>

```typescript
public readonly distPath: string;
```

- *Type:* string

Path to generated / built files.

---

##### `branchesWithRecords`<sup>Optional</sup> <a name="branchesWithRecords" id="@quirionit/cdk-constructs.MicrofrontendConfiguration.property.branchesWithRecords"></a>

```typescript
public readonly branchesWithRecords: string[];
```

- *Type:* string[]

All branches which should be deployed with given deployment configuration.

---

##### `config`<sup>Optional</sup> <a name="config" id="@quirionit/cdk-constructs.MicrofrontendConfiguration.property.config"></a>

```typescript
public readonly config: DeploymentConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.DeploymentConfiguration">DeploymentConfiguration</a>

Deployment configuration.

---

##### `distribution`<sup>Optional</sup> <a name="distribution" id="@quirionit/cdk-constructs.MicrofrontendConfiguration.property.distribution"></a>

```typescript
public readonly distribution: boolean;
```

- *Type:* boolean

Whether the bucket should be deployed with a cloudfront - distribution.

---

### MicroserviceConfiguration <a name="MicroserviceConfiguration" id="@quirionit/cdk-constructs.MicroserviceConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.MicroserviceConfiguration.Initializer"></a>

```typescript
import { MicroserviceConfiguration } from '@quirionit/cdk-constructs'

const microserviceConfiguration: MicroserviceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.MicroserviceConfiguration.property.context">context</a></code> | <code>string</code> | Context the ms is implementing. |
| <code><a href="#@quirionit/cdk-constructs.MicroserviceConfiguration.property.dataStore">dataStore</a></code> | <code>boolean</code> | Should create dynamo data store. |
| <code><a href="#@quirionit/cdk-constructs.MicroserviceConfiguration.property.domain">domain</a></code> | <code>string</code> | Domain (according to domain model). |
| <code><a href="#@quirionit/cdk-constructs.MicroserviceConfiguration.property.eventStore">eventStore</a></code> | <code>boolean</code> | Should create event store. |
| <code><a href="#@quirionit/cdk-constructs.MicroserviceConfiguration.property.api">api</a></code> | <code><a href="#@quirionit/cdk-constructs.ApiConfiguration">ApiConfiguration</a></code> | Should create an api gateway for the microservice default: undefined. |

---

##### `context`<sup>Required</sup> <a name="context" id="@quirionit/cdk-constructs.MicroserviceConfiguration.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

Context the ms is implementing.

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@quirionit/cdk-constructs.MicroserviceConfiguration.property.dataStore"></a>

```typescript
public readonly dataStore: boolean;
```

- *Type:* boolean

Should create dynamo data store.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@quirionit/cdk-constructs.MicroserviceConfiguration.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain (according to domain model).

---

##### `eventStore`<sup>Required</sup> <a name="eventStore" id="@quirionit/cdk-constructs.MicroserviceConfiguration.property.eventStore"></a>

```typescript
public readonly eventStore: boolean;
```

- *Type:* boolean

Should create event store.

---

##### `api`<sup>Optional</sup> <a name="api" id="@quirionit/cdk-constructs.MicroserviceConfiguration.property.api"></a>

```typescript
public readonly api: ApiConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.ApiConfiguration">ApiConfiguration</a>

Should create an api gateway for the microservice default: undefined.

---

### NewLambdaConfiguration <a name="NewLambdaConfiguration" id="@quirionit/cdk-constructs.NewLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.NewLambdaConfiguration.Initializer"></a>

```typescript
import { NewLambdaConfiguration } from '@quirionit/cdk-constructs'

const newLambdaConfiguration: NewLambdaConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.NewLambdaConfiguration.property.path">path</a></code> | <code>string</code> | Path to lambda. |
| <code><a href="#@quirionit/cdk-constructs.NewLambdaConfiguration.property.type">type</a></code> | <code>string</code> | Type of lambda. |
| <code><a href="#@quirionit/cdk-constructs.NewLambdaConfiguration.property.lambdaProps">lambdaProps</a></code> | <code><a href="#@quirionit/cdk-constructs.GoLambdaConfiguration">GoLambdaConfiguration</a> \| <a href="#@quirionit/cdk-constructs.NodejsLambdaConfiguration">NodejsLambdaConfiguration</a></code> | Hand in extra lambda props. |
| <code><a href="#@quirionit/cdk-constructs.NewLambdaConfiguration.property.queue">queue</a></code> | <code><a href="#@quirionit/cdk-constructs.QueueConfiguration">QueueConfiguration</a></code> | Should be subscribed to queue. |
| <code><a href="#@quirionit/cdk-constructs.NewLambdaConfiguration.property.route">route</a></code> | <code><a href="#@quirionit/cdk-constructs.RouteConfiguration">RouteConfiguration</a></code> | Route configuration for api lambdas. |

---

##### `path`<sup>Required</sup> <a name="path" id="@quirionit/cdk-constructs.NewLambdaConfiguration.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to lambda.

---

##### `type`<sup>Required</sup> <a name="type" id="@quirionit/cdk-constructs.NewLambdaConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of lambda.

---

##### `lambdaProps`<sup>Optional</sup> <a name="lambdaProps" id="@quirionit/cdk-constructs.NewLambdaConfiguration.property.lambdaProps"></a>

```typescript
public readonly lambdaProps: GoLambdaConfiguration | NodejsLambdaConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.GoLambdaConfiguration">GoLambdaConfiguration</a> | <a href="#@quirionit/cdk-constructs.NodejsLambdaConfiguration">NodejsLambdaConfiguration</a>

Hand in extra lambda props.

---

##### `queue`<sup>Optional</sup> <a name="queue" id="@quirionit/cdk-constructs.NewLambdaConfiguration.property.queue"></a>

```typescript
public readonly queue: QueueConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.QueueConfiguration">QueueConfiguration</a>

Should be subscribed to queue.

---

##### `route`<sup>Optional</sup> <a name="route" id="@quirionit/cdk-constructs.NewLambdaConfiguration.property.route"></a>

```typescript
public readonly route: RouteConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.RouteConfiguration">RouteConfiguration</a>

Route configuration for api lambdas.

---

### NodejsLambdaConfiguration <a name="NodejsLambdaConfiguration" id="@quirionit/cdk-constructs.NodejsLambdaConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.NodejsLambdaConfiguration.Initializer"></a>

```typescript
import { NodejsLambdaConfiguration } from '@quirionit/cdk-constructs'

const nodejsLambdaConfiguration: NodejsLambdaConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.NodejsLambdaConfiguration.property.policies">policies</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatementProps[]</code> | List of policy - statements which will be attached to lambda. |
| <code><a href="#@quirionit/cdk-constructs.NodejsLambdaConfiguration.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>boolean</code> | Activate concurrent provisioning (default: false). |
| <code><a href="#@quirionit/cdk-constructs.NodejsLambdaConfiguration.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a></code> | Override default configuration for provisioned concurrency default:. |
| <code><a href="#@quirionit/cdk-constructs.NodejsLambdaConfiguration.property.shouldStoreArn">shouldStoreArn</a></code> | <code>boolean</code> | Should save lambda arn as ssm - parameter (default: false). |
| <code><a href="#@quirionit/cdk-constructs.NodejsLambdaConfiguration.property.functionProps">functionProps</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunctionProps</code> | Should hand in regular function props. |

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@quirionit/cdk-constructs.NodejsLambdaConfiguration.property.policies"></a>

```typescript
public readonly policies: PolicyStatementProps[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps[]

List of policy - statements which will be attached to lambda.

---

##### `provisionedConcurrency`<sup>Optional</sup> <a name="provisionedConcurrency" id="@quirionit/cdk-constructs.NodejsLambdaConfiguration.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: boolean;
```

- *Type:* boolean

Activate concurrent provisioning (default: false).

---

##### `provisionedConcurrencyConfig`<sup>Optional</sup> <a name="provisionedConcurrencyConfig" id="@quirionit/cdk-constructs.NodejsLambdaConfiguration.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;
```

- *Type:* <a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a>

Override default configuration for provisioned concurrency default:.

> [DefaultConfiguration](DefaultConfiguration)

---

##### `shouldStoreArn`<sup>Optional</sup> <a name="shouldStoreArn" id="@quirionit/cdk-constructs.NodejsLambdaConfiguration.property.shouldStoreArn"></a>

```typescript
public readonly shouldStoreArn: boolean;
```

- *Type:* boolean

Should save lambda arn as ssm - parameter (default: false).

---

##### `functionProps`<sup>Optional</sup> <a name="functionProps" id="@quirionit/cdk-constructs.NodejsLambdaConfiguration.property.functionProps"></a>

```typescript
public readonly functionProps: NodejsFunctionProps;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunctionProps

Should hand in regular function props.

---

### ProvisionedConcurrencyConfiguration <a name="ProvisionedConcurrencyConfiguration" id="@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration"></a>

Configuration for provisioned concurrency.

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration.Initializer"></a>

```typescript
import { ProvisionedConcurrencyConfiguration } from '@quirionit/cdk-constructs'

const provisionedConcurrencyConfiguration: ProvisionedConcurrencyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration.property.from">from</a></code> | <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a></code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration.property.to">to</a></code> | <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a></code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration.property.utilizationTarget">utilizationTarget</a></code> | <code>number</code> | *No description.* |

---

##### `from`<sup>Required</sup> <a name="from" id="@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration.property.from"></a>

```typescript
public readonly from: ProvisionedConcurrencyConfigurationTime;
```

- *Type:* <a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a>

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `to`<sup>Required</sup> <a name="to" id="@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration.property.to"></a>

```typescript
public readonly to: ProvisionedConcurrencyConfigurationTime;
```

- *Type:* <a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a>

---

##### `utilizationTarget`<sup>Required</sup> <a name="utilizationTarget" id="@quirionit/cdk-constructs.ProvisionedConcurrencyConfiguration.property.utilizationTarget"></a>

```typescript
public readonly utilizationTarget: number;
```

- *Type:* number

---

### ProvisionedConcurrencyConfigurationTime <a name="ProvisionedConcurrencyConfigurationTime" id="@quirionit/cdk-constructs.ProvisionedConcurrencyConfigurationTime"></a>

Time for provisioned concurrency (from - to).

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.ProvisionedConcurrencyConfigurationTime.Initializer"></a>

```typescript
import { ProvisionedConcurrencyConfigurationTime } from '@quirionit/cdk-constructs'

const provisionedConcurrencyConfigurationTime: ProvisionedConcurrencyConfigurationTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.hour">hour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.minute">minute</a></code> | <code>string</code> | *No description.* |

---

##### `hour`<sup>Required</sup> <a name="hour" id="@quirionit/cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.hour"></a>

```typescript
public readonly hour: string;
```

- *Type:* string

---

##### `minute`<sup>Required</sup> <a name="minute" id="@quirionit/cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.minute"></a>

```typescript
public readonly minute: string;
```

- *Type:* string

---

### QueueConfiguration <a name="QueueConfiguration" id="@quirionit/cdk-constructs.QueueConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.QueueConfiguration.Initializer"></a>

```typescript
import { QueueConfiguration } from '@quirionit/cdk-constructs'

const queueConfiguration: QueueConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.QueueConfiguration.property.busName">busName</a></code> | <code>string</code> | Name of event bus. |
| <code><a href="#@quirionit/cdk-constructs.QueueConfiguration.property.eventPattern">eventPattern</a></code> | <code>aws-cdk-lib.aws_events.EventPattern</code> | Configure a pattern to filter incoming events Read more here: https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html https://docs.aws.amazon.com/cdk/api/v2//docs/aws-cdk-lib.aws_events.EventPattern.html. |
| <code><a href="#@quirionit/cdk-constructs.QueueConfiguration.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | Configure a schedule to run this lambda. |

---

##### `busName`<sup>Required</sup> <a name="busName" id="@quirionit/cdk-constructs.QueueConfiguration.property.busName"></a>

```typescript
public readonly busName: string;
```

- *Type:* string

Name of event bus.

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@quirionit/cdk-constructs.QueueConfiguration.property.eventPattern"></a>

```typescript
public readonly eventPattern: EventPattern;
```

- *Type:* aws-cdk-lib.aws_events.EventPattern

Configure a pattern to filter incoming events Read more here: https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html https://docs.aws.amazon.com/cdk/api/v2//docs/aws-cdk-lib.aws_events.EventPattern.html.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@quirionit/cdk-constructs.QueueConfiguration.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

Configure a schedule to run this lambda.

---

### RouteConfiguration <a name="RouteConfiguration" id="@quirionit/cdk-constructs.RouteConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.RouteConfiguration.Initializer"></a>

```typescript
import { RouteConfiguration } from '@quirionit/cdk-constructs'

const routeConfiguration: RouteConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.RouteConfiguration.property.method">method</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.HttpMethod</code> | Http method for route. |
| <code><a href="#@quirionit/cdk-constructs.RouteConfiguration.property.path">path</a></code> | <code>string</code> | Path to lambda function. |
| <code><a href="#@quirionit/cdk-constructs.RouteConfiguration.property.authorizer">authorizer</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.IHttpRouteAuthorizer</code> | Optional authorizer. |

---

##### `method`<sup>Required</sup> <a name="method" id="@quirionit/cdk-constructs.RouteConfiguration.property.method"></a>

```typescript
public readonly method: HttpMethod;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.HttpMethod

Http method for route.

---

##### `path`<sup>Required</sup> <a name="path" id="@quirionit/cdk-constructs.RouteConfiguration.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to lambda function.

---

##### `authorizer`<sup>Optional</sup> <a name="authorizer" id="@quirionit/cdk-constructs.RouteConfiguration.property.authorizer"></a>

```typescript
public readonly authorizer: IHttpRouteAuthorizer;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.IHttpRouteAuthorizer

Optional authorizer.

---

### SingleTableDatastoreProps <a name="SingleTableDatastoreProps" id="@quirionit/cdk-constructs.SingleTableDatastoreProps"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.SingleTableDatastoreProps.Initializer"></a>

```typescript
import { SingleTableDatastoreProps } from '@quirionit/cdk-constructs'

const singleTableDatastoreProps: SingleTableDatastoreProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.SingleTableDatastoreProps.property.tableName">tableName</a></code> | <code>string</code> | Mandatory table name. |
| <code><a href="#@quirionit/cdk-constructs.SingleTableDatastoreProps.property.options">options</a></code> | <code>any</code> | TODO figure out how to use TableProps but every attribute is optional. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@quirionit/cdk-constructs.SingleTableDatastoreProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Mandatory table name.

---

##### `options`<sup>Optional</sup> <a name="options" id="@quirionit/cdk-constructs.SingleTableDatastoreProps.property.options"></a>

```typescript
public readonly options: any;
```

- *Type:* any

TODO figure out how to use TableProps but every attribute is optional.

Optional extend deployment with more table props. Notice the injected config will override some.

> [Configuration](Configuration)

---

### SwaggerConfiguration <a name="SwaggerConfiguration" id="@quirionit/cdk-constructs.SwaggerConfiguration"></a>

#### Initializer <a name="Initializer" id="@quirionit/cdk-constructs.SwaggerConfiguration.Initializer"></a>

```typescript
import { SwaggerConfiguration } from '@quirionit/cdk-constructs'

const swaggerConfiguration: SwaggerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@quirionit/cdk-constructs.SwaggerConfiguration.property.bucketName">bucketName</a></code> | <code>string</code> | Name of bucket. |
| <code><a href="#@quirionit/cdk-constructs.SwaggerConfiguration.property.path">path</a></code> | <code>string</code> | Path to asset to upload to s3 (Zipped Swagger documentation). |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@quirionit/cdk-constructs.SwaggerConfiguration.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Name of bucket.

---

##### `path`<sup>Required</sup> <a name="path" id="@quirionit/cdk-constructs.SwaggerConfiguration.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to asset to upload to s3 (Zipped Swagger documentation).

---



## Enums <a name="Enums" id="Enums"></a>

### Stage <a name="Stage" id="@quirionit/cdk-constructs.Stage"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@quirionit/cdk-constructs.Stage.DEVELOPMENT">DEVELOPMENT</a></code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Stage.PRODUCTION">PRODUCTION</a></code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Stage.PREVIEW">PREVIEW</a></code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Stage.PREPRODUCTION">PREPRODUCTION</a></code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Stage.TEST">TEST</a></code> | *No description.* |
| <code><a href="#@quirionit/cdk-constructs.Stage.FEATURE">FEATURE</a></code> | *No description.* |

---

Aws stages names.

#### `DEVELOPMENT` <a name="DEVELOPMENT" id="@quirionit/cdk-constructs.Stage.DEVELOPMENT"></a>

---


#### `PRODUCTION` <a name="PRODUCTION" id="@quirionit/cdk-constructs.Stage.PRODUCTION"></a>

---


#### `PREVIEW` <a name="PREVIEW" id="@quirionit/cdk-constructs.Stage.PREVIEW"></a>

---


#### `PREPRODUCTION` <a name="PREPRODUCTION" id="@quirionit/cdk-constructs.Stage.PREPRODUCTION"></a>

---


#### `TEST` <a name="TEST" id="@quirionit/cdk-constructs.Stage.TEST"></a>

---


#### `FEATURE` <a name="FEATURE" id="@quirionit/cdk-constructs.Stage.FEATURE"></a>

---

