# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BaseApi <a name="BaseApi" id="cdk-constructs.BaseApi"></a>

#### Initializers <a name="Initializers" id="cdk-constructs.BaseApi.Initializer"></a>

```typescript
import { BaseApi } from 'cdk-constructs'

new BaseApi(scope: Construct, id: string, props: BaseApiProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.BaseApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs.BaseApi.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.BaseApi.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-constructs.BaseApiProps">BaseApiProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs.BaseApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs.BaseApi.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs.BaseApi.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-constructs.BaseApiProps">BaseApiProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs.BaseApi.newRoute">newRoute</a></code> | *No description.* |

---

##### `newRoute` <a name="newRoute" id="cdk-constructs.BaseApi.newRoute"></a>

```typescript
public newRoute(props: NewRouteProps)
```

###### `props`<sup>Required</sup> <a name="props" id="cdk-constructs.BaseApi.newRoute.parameter.props"></a>

- *Type:* <a href="#cdk-constructs.NewRouteProps">NewRouteProps</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.BaseApi.property.api">api</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.HttpApi</code> | *No description.* |
| <code><a href="#cdk-constructs.BaseApi.property.authorizer">authorizer</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.IHttpRouteAuthorizer</code> | *No description.* |

---

##### `api`<sup>Required</sup> <a name="api" id="cdk-constructs.BaseApi.property.api"></a>

```typescript
public readonly api: HttpApi;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.HttpApi

---

##### `authorizer`<sup>Optional</sup> <a name="authorizer" id="cdk-constructs.BaseApi.property.authorizer"></a>

```typescript
public readonly authorizer: IHttpRouteAuthorizer;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.IHttpRouteAuthorizer

---


### BaseLambda <a name="BaseLambda" id="cdk-constructs.BaseLambda"></a>

#### Initializers <a name="Initializers" id="cdk-constructs.BaseLambda.Initializer"></a>

```typescript
import { BaseLambda } from 'cdk-constructs'

new BaseLambda(scope: Construct, id: string, props: BaseLambdaProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.BaseLambda.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs.BaseLambda.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.BaseLambda.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-constructs.BaseLambdaProps">BaseLambdaProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs.BaseLambda.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs.BaseLambda.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs.BaseLambda.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-constructs.BaseLambdaProps">BaseLambdaProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.BaseLambda.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.BaseLambda.property.function">function</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction \| @aws-cdk/aws-lambda-go-alpha.GoFunction</code> | *No description.* |
| <code><a href="#cdk-constructs.BaseLambda.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.BaseLambda.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-constructs.BaseLambda.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a></code> | *No description.* |
| <code><a href="#cdk-constructs.BaseLambda.property.shouldStoreArn">shouldStoreArn</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-constructs.BaseLambda.property.policies">policies</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatementProps[]</code> | *No description.* |

---

##### `arn`<sup>Required</sup> <a name="arn" id="cdk-constructs.BaseLambda.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="cdk-constructs.BaseLambda.property.function"></a>

```typescript
public readonly function: NodejsFunction | GoFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction | @aws-cdk/aws-lambda-go-alpha.GoFunction

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-constructs.BaseLambda.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `provisionedConcurrency`<sup>Required</sup> <a name="provisionedConcurrency" id="cdk-constructs.BaseLambda.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: boolean;
```

- *Type:* boolean

---

##### `provisionedConcurrencyConfig`<sup>Required</sup> <a name="provisionedConcurrencyConfig" id="cdk-constructs.BaseLambda.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;
```

- *Type:* <a href="#cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a>

---

##### `shouldStoreArn`<sup>Required</sup> <a name="shouldStoreArn" id="cdk-constructs.BaseLambda.property.shouldStoreArn"></a>

```typescript
public readonly shouldStoreArn: boolean;
```

- *Type:* boolean

---

##### `policies`<sup>Optional</sup> <a name="policies" id="cdk-constructs.BaseLambda.property.policies"></a>

```typescript
public readonly policies: PolicyStatementProps[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps[]

---


### MicroFrontend <a name="MicroFrontend" id="cdk-constructs.MicroFrontend"></a>

MicroFrontendStack deploys static files to a public s3 bucket.

#### Initializers <a name="Initializers" id="cdk-constructs.MicroFrontend.Initializer"></a>

```typescript
import { MicroFrontend } from 'cdk-constructs'

new MicroFrontend(scope: Construct, id: string, props: MicroFrontendProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.MicroFrontend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs.MicroFrontend.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.MicroFrontend.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-constructs.MicroFrontendProps">MicroFrontendProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs.MicroFrontend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs.MicroFrontend.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs.MicroFrontend.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-constructs.MicroFrontendProps">MicroFrontendProps</a>

---





### Microservice <a name="Microservice" id="cdk-constructs.Microservice"></a>

#### Initializers <a name="Initializers" id="cdk-constructs.Microservice.Initializer"></a>

```typescript
import { Microservice } from 'cdk-constructs'

new Microservice(scope: Construct, id: string, props: MicroserviceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.Microservice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs.Microservice.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.Microservice.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-constructs.MicroserviceProps">MicroserviceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs.Microservice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs.Microservice.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs.Microservice.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-constructs.MicroserviceProps">MicroserviceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs.Microservice.newLambda">newLambda</a></code> | Add new Lambda to microservice. |

---

##### `newLambda` <a name="newLambda" id="cdk-constructs.Microservice.newLambda"></a>

```typescript
public newLambda(props: MicroserviceNewLambdaProps)
```

###### `props`<sup>Required</sup> <a name="props" id="cdk-constructs.Microservice.newLambda.parameter.props"></a>

- *Type:* <a href="#cdk-constructs.MicroserviceNewLambdaProps">MicroserviceNewLambdaProps</a>

MicroserviceNewLambdaProps.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.Microservice.property.lambdas">lambdas</a></code> | <code>{[ key: string ]: <a href="#cdk-constructs.BaseLambda">BaseLambda</a>}</code> | *No description.* |
| <code><a href="#cdk-constructs.Microservice.property.api">api</a></code> | <code><a href="#cdk-constructs.BaseApi">BaseApi</a></code> | *No description.* |
| <code><a href="#cdk-constructs.Microservice.property.dataStore">dataStore</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | *No description.* |
| <code><a href="#cdk-constructs.Microservice.property.eventStore">eventStore</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | *No description.* |

---

##### `lambdas`<sup>Required</sup> <a name="lambdas" id="cdk-constructs.Microservice.property.lambdas"></a>

```typescript
public readonly lambdas: {[ key: string ]: BaseLambda};
```

- *Type:* {[ key: string ]: <a href="#cdk-constructs.BaseLambda">BaseLambda</a>}

---

##### `api`<sup>Optional</sup> <a name="api" id="cdk-constructs.Microservice.property.api"></a>

```typescript
public readonly api: BaseApi;
```

- *Type:* <a href="#cdk-constructs.BaseApi">BaseApi</a>

---

##### `dataStore`<sup>Optional</sup> <a name="dataStore" id="cdk-constructs.Microservice.property.dataStore"></a>

```typescript
public readonly dataStore: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

---

##### `eventStore`<sup>Optional</sup> <a name="eventStore" id="cdk-constructs.Microservice.property.eventStore"></a>

```typescript
public readonly eventStore: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

---


### SingleTableDatastore <a name="SingleTableDatastore" id="cdk-constructs.SingleTableDatastore"></a>

#### Initializers <a name="Initializers" id="cdk-constructs.SingleTableDatastore.Initializer"></a>

```typescript
import { SingleTableDatastore } from 'cdk-constructs'

new SingleTableDatastore(scope: Construct, id: string, props: SingleTableDatastoreProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.SingleTableDatastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs.SingleTableDatastore.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.SingleTableDatastore.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-constructs.SingleTableDatastoreProps">SingleTableDatastoreProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs.SingleTableDatastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs.SingleTableDatastore.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs.SingleTableDatastore.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-constructs.SingleTableDatastoreProps">SingleTableDatastoreProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.SingleTableDatastore.property.table">table</a></code> | <code>aws-cdk-lib.aws_dynamodb.Table</code> | *No description.* |

---

##### `table`<sup>Required</sup> <a name="table" id="cdk-constructs.SingleTableDatastore.property.table"></a>

```typescript
public readonly table: Table;
```

- *Type:* aws-cdk-lib.aws_dynamodb.Table

---


### Swagger <a name="Swagger" id="cdk-constructs.Swagger"></a>

#### Initializers <a name="Initializers" id="cdk-constructs.Swagger.Initializer"></a>

```typescript
import { Swagger } from 'cdk-constructs'

new Swagger(scope: Construct, id: string, props: SwaggerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.Swagger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-constructs.Swagger.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.Swagger.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-constructs.SwaggerProps">SwaggerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-constructs.Swagger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-constructs.Swagger.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-constructs.Swagger.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-constructs.SwaggerProps">SwaggerProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.Swagger.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.Bucket</code> | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="cdk-constructs.Swagger.property.bucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* aws-cdk-lib.aws_s3.Bucket

---


## Structs <a name="Structs" id="Structs"></a>

### ApiProps <a name="ApiProps" id="cdk-constructs.ApiProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs.ApiProps.Initializer"></a>

```typescript
import { ApiProps } from 'cdk-constructs'

const apiProps: ApiProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.ApiProps.property.public">public</a></code> | <code>boolean</code> | Should it be public (or internal use only). |
| <code><a href="#cdk-constructs.ApiProps.property.swagger">swagger</a></code> | <code><a href="#cdk-constructs.SwaggerProps">SwaggerProps</a></code> | Should create and publish swagger documentation. |

---

##### `public`<sup>Required</sup> <a name="public" id="cdk-constructs.ApiProps.property.public"></a>

```typescript
public readonly public: boolean;
```

- *Type:* boolean

Should it be public (or internal use only).

---

##### `swagger`<sup>Optional</sup> <a name="swagger" id="cdk-constructs.ApiProps.property.swagger"></a>

```typescript
public readonly swagger: SwaggerProps;
```

- *Type:* <a href="#cdk-constructs.SwaggerProps">SwaggerProps</a>

Should create and publish swagger documentation.

---

### BaseApiProps <a name="BaseApiProps" id="cdk-constructs.BaseApiProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs.BaseApiProps.Initializer"></a>

```typescript
import { BaseApiProps } from 'cdk-constructs'

const baseApiProps: BaseApiProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.BaseApiProps.property.defaultAuthorizer">defaultAuthorizer</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.IHttpRouteAuthorizer</code> | Default authorizer for all routes. |
| <code><a href="#cdk-constructs.BaseApiProps.property.descriptions">descriptions</a></code> | <code>string</code> | Description of api. |

---

##### `defaultAuthorizer`<sup>Optional</sup> <a name="defaultAuthorizer" id="cdk-constructs.BaseApiProps.property.defaultAuthorizer"></a>

```typescript
public readonly defaultAuthorizer: IHttpRouteAuthorizer;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.IHttpRouteAuthorizer

Default authorizer for all routes.

---

##### `descriptions`<sup>Optional</sup> <a name="descriptions" id="cdk-constructs.BaseApiProps.property.descriptions"></a>

```typescript
public readonly descriptions: string;
```

- *Type:* string

Description of api.

---

### BaseLambdaProps <a name="BaseLambdaProps" id="cdk-constructs.BaseLambdaProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs.BaseLambdaProps.Initializer"></a>

```typescript
import { BaseLambdaProps } from 'cdk-constructs'

const baseLambdaProps: BaseLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.BaseLambdaProps.property.functionType">functionType</a></code> | <code><a href="#cdk-constructs.FunctionType">FunctionType</a></code> | What kind of function should be created. |
| <code><a href="#cdk-constructs.BaseLambdaProps.property.name">name</a></code> | <code>string</code> | Name of lambda. |
| <code><a href="#cdk-constructs.BaseLambdaProps.property.path">path</a></code> | <code>string</code> | path to lambda lambda. |
| <code><a href="#cdk-constructs.BaseLambdaProps.property.args">args</a></code> | <code>aws-cdk-lib.aws_lambda.FunctionOptions</code> | Property for lambda - function (will override defaults). |
| <code><a href="#cdk-constructs.BaseLambdaProps.property.policies">policies</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatementProps[]</code> | List of policy - statements which will be attached to lambda. |
| <code><a href="#cdk-constructs.BaseLambdaProps.property.provisionedConcurrency">provisionedConcurrency</a></code> | <code>boolean</code> | Activate concurrent provisioning (default: false). |
| <code><a href="#cdk-constructs.BaseLambdaProps.property.provisionedConcurrencyConfig">provisionedConcurrencyConfig</a></code> | <code><a href="#cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a></code> | Override default configuration for provisioned concurrency. |
| <code><a href="#cdk-constructs.BaseLambdaProps.property.shouldStoreArn">shouldStoreArn</a></code> | <code>boolean</code> | Should save lambda arn as ssm - parameter (default: false). |

---

##### `functionType`<sup>Required</sup> <a name="functionType" id="cdk-constructs.BaseLambdaProps.property.functionType"></a>

```typescript
public readonly functionType: FunctionType;
```

- *Type:* <a href="#cdk-constructs.FunctionType">FunctionType</a>

What kind of function should be created.

---

##### `name`<sup>Required</sup> <a name="name" id="cdk-constructs.BaseLambdaProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of lambda.

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-constructs.BaseLambdaProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

path to lambda lambda.

---

##### `args`<sup>Optional</sup> <a name="args" id="cdk-constructs.BaseLambdaProps.property.args"></a>

```typescript
public readonly args: FunctionOptions;
```

- *Type:* aws-cdk-lib.aws_lambda.FunctionOptions

Property for lambda - function (will override defaults).

---

##### `policies`<sup>Optional</sup> <a name="policies" id="cdk-constructs.BaseLambdaProps.property.policies"></a>

```typescript
public readonly policies: PolicyStatementProps[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatementProps[]

List of policy - statements which will be attached to lambda.

---

##### `provisionedConcurrency`<sup>Optional</sup> <a name="provisionedConcurrency" id="cdk-constructs.BaseLambdaProps.property.provisionedConcurrency"></a>

```typescript
public readonly provisionedConcurrency: boolean;
```

- *Type:* boolean

Activate concurrent provisioning (default: false).

---

##### `provisionedConcurrencyConfig`<sup>Optional</sup> <a name="provisionedConcurrencyConfig" id="cdk-constructs.BaseLambdaProps.property.provisionedConcurrencyConfig"></a>

```typescript
public readonly provisionedConcurrencyConfig: ProvisionedConcurrencyConfiguration;
```

- *Type:* <a href="#cdk-constructs.ProvisionedConcurrencyConfiguration">ProvisionedConcurrencyConfiguration</a>

Override default configuration for provisioned concurrency.

---

##### `shouldStoreArn`<sup>Optional</sup> <a name="shouldStoreArn" id="cdk-constructs.BaseLambdaProps.property.shouldStoreArn"></a>

```typescript
public readonly shouldStoreArn: boolean;
```

- *Type:* boolean

Should save lambda arn as ssm - parameter (default: false).

---

### Config <a name="Config" id="cdk-constructs.Config"></a>

Used context variables.

#### Initializer <a name="Initializer" id="cdk-constructs.Config.Initializer"></a>

```typescript
import { Config } from 'cdk-constructs'

const config: Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.Config.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.Config.property.domainNames">domainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdk-constructs.Config.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.Config.property.recordName">recordName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.Config.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="cdk-constructs.Config.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="cdk-constructs.Config.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="cdk-constructs.Config.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `recordName`<sup>Required</sup> <a name="recordName" id="cdk-constructs.Config.property.recordName"></a>

```typescript
public readonly recordName: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="cdk-constructs.Config.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

### MicroFrontendProps <a name="MicroFrontendProps" id="cdk-constructs.MicroFrontendProps"></a>

Additional props to create a new microfrontend stack.

#### Initializer <a name="Initializer" id="cdk-constructs.MicroFrontendProps.Initializer"></a>

```typescript
import { MicroFrontendProps } from 'cdk-constructs'

const microFrontendProps: MicroFrontendProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.MicroFrontendProps.property.app">app</a></code> | <code>string</code> | Describes the name of the app. |
| <code><a href="#cdk-constructs.MicroFrontendProps.property.config">config</a></code> | <code><a href="#cdk-constructs.Config">Config</a></code> | Deployment configuration. |
| <code><a href="#cdk-constructs.MicroFrontendProps.property.distPath">distPath</a></code> | <code>string</code> | Path to generated / built files. |

---

##### `app`<sup>Required</sup> <a name="app" id="cdk-constructs.MicroFrontendProps.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Describes the name of the app.

---

##### `config`<sup>Required</sup> <a name="config" id="cdk-constructs.MicroFrontendProps.property.config"></a>

```typescript
public readonly config: Config;
```

- *Type:* <a href="#cdk-constructs.Config">Config</a>

Deployment configuration.

---

##### `distPath`<sup>Required</sup> <a name="distPath" id="cdk-constructs.MicroFrontendProps.property.distPath"></a>

```typescript
public readonly distPath: string;
```

- *Type:* string

Path to generated / built files.

---

### MicroserviceNewLambdaProps <a name="MicroserviceNewLambdaProps" id="cdk-constructs.MicroserviceNewLambdaProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs.MicroserviceNewLambdaProps.Initializer"></a>

```typescript
import { MicroserviceNewLambdaProps } from 'cdk-constructs'

const microserviceNewLambdaProps: MicroserviceNewLambdaProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.MicroserviceNewLambdaProps.property.path">path</a></code> | <code>string</code> | Path to lambda. |
| <code><a href="#cdk-constructs.MicroserviceNewLambdaProps.property.lambdaProps">lambdaProps</a></code> | <code><a href="#cdk-constructs.BaseLambdaProps">BaseLambdaProps</a></code> | Hand in extra lambda props. |
| <code><a href="#cdk-constructs.MicroserviceNewLambdaProps.property.queue">queue</a></code> | <code><a href="#cdk-constructs.QueueProps">QueueProps</a></code> | Should be subscribed to queue. |
| <code><a href="#cdk-constructs.MicroserviceNewLambdaProps.property.route">route</a></code> | <code><a href="#cdk-constructs.RouteProps">RouteProps</a></code> | Route configuration for api lambdas. |

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-constructs.MicroserviceNewLambdaProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to lambda.

---

##### `lambdaProps`<sup>Optional</sup> <a name="lambdaProps" id="cdk-constructs.MicroserviceNewLambdaProps.property.lambdaProps"></a>

```typescript
public readonly lambdaProps: BaseLambdaProps;
```

- *Type:* <a href="#cdk-constructs.BaseLambdaProps">BaseLambdaProps</a>

Hand in extra lambda props.

---

##### `queue`<sup>Optional</sup> <a name="queue" id="cdk-constructs.MicroserviceNewLambdaProps.property.queue"></a>

```typescript
public readonly queue: QueueProps;
```

- *Type:* <a href="#cdk-constructs.QueueProps">QueueProps</a>

Should be subscribed to queue.

---

##### `route`<sup>Optional</sup> <a name="route" id="cdk-constructs.MicroserviceNewLambdaProps.property.route"></a>

```typescript
public readonly route: RouteProps;
```

- *Type:* <a href="#cdk-constructs.RouteProps">RouteProps</a>

Route configuration for api lambdas.

---

### MicroserviceProps <a name="MicroserviceProps" id="cdk-constructs.MicroserviceProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs.MicroserviceProps.Initializer"></a>

```typescript
import { MicroserviceProps } from 'cdk-constructs'

const microserviceProps: MicroserviceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.MicroserviceProps.property.context">context</a></code> | <code>string</code> | Context the ms is implementing. |
| <code><a href="#cdk-constructs.MicroserviceProps.property.dataStore">dataStore</a></code> | <code>boolean</code> | Should create dynamo data store. |
| <code><a href="#cdk-constructs.MicroserviceProps.property.domain">domain</a></code> | <code>string</code> | Domain (according to domain model). |
| <code><a href="#cdk-constructs.MicroserviceProps.property.eventStore">eventStore</a></code> | <code>boolean</code> | Should create event store. |
| <code><a href="#cdk-constructs.MicroserviceProps.property.api">api</a></code> | <code><a href="#cdk-constructs.ApiProps">ApiProps</a></code> | Should create an api gateway for the microservice default: undefined. |

---

##### `context`<sup>Required</sup> <a name="context" id="cdk-constructs.MicroserviceProps.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

Context the ms is implementing.

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="cdk-constructs.MicroserviceProps.property.dataStore"></a>

```typescript
public readonly dataStore: boolean;
```

- *Type:* boolean

Should create dynamo data store.

---

##### `domain`<sup>Required</sup> <a name="domain" id="cdk-constructs.MicroserviceProps.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain (according to domain model).

---

##### `eventStore`<sup>Required</sup> <a name="eventStore" id="cdk-constructs.MicroserviceProps.property.eventStore"></a>

```typescript
public readonly eventStore: boolean;
```

- *Type:* boolean

Should create event store.

---

##### `api`<sup>Optional</sup> <a name="api" id="cdk-constructs.MicroserviceProps.property.api"></a>

```typescript
public readonly api: ApiProps;
```

- *Type:* <a href="#cdk-constructs.ApiProps">ApiProps</a>

Should create an api gateway for the microservice default: undefined.

---

### NewRouteProps <a name="NewRouteProps" id="cdk-constructs.NewRouteProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs.NewRouteProps.Initializer"></a>

```typescript
import { NewRouteProps } from 'cdk-constructs'

const newRouteProps: NewRouteProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.NewRouteProps.property.method">method</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.HttpMethod</code> | Http - Method of path / rest - call. |
| <code><a href="#cdk-constructs.NewRouteProps.property.func">func</a></code> | <code>aws-cdk-lib.aws_lambda.Function</code> | Provide a lambda - function as a shortcut for providing an integration. |

---

##### `method`<sup>Required</sup> <a name="method" id="cdk-constructs.NewRouteProps.property.method"></a>

```typescript
public readonly method: HttpMethod;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.HttpMethod

Http - Method of path / rest - call.

---

##### `func`<sup>Optional</sup> <a name="func" id="cdk-constructs.NewRouteProps.property.func"></a>

```typescript
public readonly func: Function;
```

- *Type:* aws-cdk-lib.aws_lambda.Function

Provide a lambda - function as a shortcut for providing an integration.

---

### ProvisionedConcurrencyConfiguration <a name="ProvisionedConcurrencyConfiguration" id="cdk-constructs.ProvisionedConcurrencyConfiguration"></a>

Configuration for provisioned concurrency.

#### Initializer <a name="Initializer" id="cdk-constructs.ProvisionedConcurrencyConfiguration.Initializer"></a>

```typescript
import { ProvisionedConcurrencyConfiguration } from 'cdk-constructs'

const provisionedConcurrencyConfiguration: ProvisionedConcurrencyConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.ProvisionedConcurrencyConfiguration.property.from">from</a></code> | <code><a href="#cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a></code> | *No description.* |
| <code><a href="#cdk-constructs.ProvisionedConcurrencyConfiguration.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-constructs.ProvisionedConcurrencyConfiguration.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-constructs.ProvisionedConcurrencyConfiguration.property.to">to</a></code> | <code><a href="#cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a></code> | *No description.* |
| <code><a href="#cdk-constructs.ProvisionedConcurrencyConfiguration.property.utilizationTarget">utilizationTarget</a></code> | <code>number</code> | *No description.* |

---

##### `from`<sup>Required</sup> <a name="from" id="cdk-constructs.ProvisionedConcurrencyConfiguration.property.from"></a>

```typescript
public readonly from: ProvisionedConcurrencyConfigurationTime;
```

- *Type:* <a href="#cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a>

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="cdk-constructs.ProvisionedConcurrencyConfiguration.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="cdk-constructs.ProvisionedConcurrencyConfiguration.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `to`<sup>Required</sup> <a name="to" id="cdk-constructs.ProvisionedConcurrencyConfiguration.property.to"></a>

```typescript
public readonly to: ProvisionedConcurrencyConfigurationTime;
```

- *Type:* <a href="#cdk-constructs.ProvisionedConcurrencyConfigurationTime">ProvisionedConcurrencyConfigurationTime</a>

---

##### `utilizationTarget`<sup>Required</sup> <a name="utilizationTarget" id="cdk-constructs.ProvisionedConcurrencyConfiguration.property.utilizationTarget"></a>

```typescript
public readonly utilizationTarget: number;
```

- *Type:* number

---

### ProvisionedConcurrencyConfigurationTime <a name="ProvisionedConcurrencyConfigurationTime" id="cdk-constructs.ProvisionedConcurrencyConfigurationTime"></a>

Time for provisioned concurrency (from - to).

#### Initializer <a name="Initializer" id="cdk-constructs.ProvisionedConcurrencyConfigurationTime.Initializer"></a>

```typescript
import { ProvisionedConcurrencyConfigurationTime } from 'cdk-constructs'

const provisionedConcurrencyConfigurationTime: ProvisionedConcurrencyConfigurationTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.hour">hour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.minute">minute</a></code> | <code>string</code> | *No description.* |

---

##### `hour`<sup>Required</sup> <a name="hour" id="cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.hour"></a>

```typescript
public readonly hour: string;
```

- *Type:* string

---

##### `minute`<sup>Required</sup> <a name="minute" id="cdk-constructs.ProvisionedConcurrencyConfigurationTime.property.minute"></a>

```typescript
public readonly minute: string;
```

- *Type:* string

---

### QueueProps <a name="QueueProps" id="cdk-constructs.QueueProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs.QueueProps.Initializer"></a>

```typescript
import { QueueProps } from 'cdk-constructs'

const queueProps: QueueProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.QueueProps.property.busName">busName</a></code> | <code>string</code> | Name of event bus. |
| <code><a href="#cdk-constructs.QueueProps.property.eventPattern">eventPattern</a></code> | <code>aws-cdk-lib.aws_events.EventPattern</code> | Configure a pattern to filter incoming events Read more here: https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html https://docs.aws.amazon.com/cdk/api/v2//docs/aws-cdk-lib.aws_events.EventPattern.html. |
| <code><a href="#cdk-constructs.QueueProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | Configure a schedule to run this lambda. |

---

##### `busName`<sup>Required</sup> <a name="busName" id="cdk-constructs.QueueProps.property.busName"></a>

```typescript
public readonly busName: string;
```

- *Type:* string

Name of event bus.

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="cdk-constructs.QueueProps.property.eventPattern"></a>

```typescript
public readonly eventPattern: EventPattern;
```

- *Type:* aws-cdk-lib.aws_events.EventPattern

Configure a pattern to filter incoming events Read more here: https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html https://docs.aws.amazon.com/cdk/api/v2//docs/aws-cdk-lib.aws_events.EventPattern.html.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="cdk-constructs.QueueProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule

Configure a schedule to run this lambda.

---

### RouteProps <a name="RouteProps" id="cdk-constructs.RouteProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs.RouteProps.Initializer"></a>

```typescript
import { RouteProps } from 'cdk-constructs'

const routeProps: RouteProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.RouteProps.property.method">method</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.HttpMethod</code> | Http method for route. |
| <code><a href="#cdk-constructs.RouteProps.property.path">path</a></code> | <code>string</code> | Path to lambda function. |
| <code><a href="#cdk-constructs.RouteProps.property.authorizer">authorizer</a></code> | <code>@aws-cdk/aws-apigatewayv2-alpha.IHttpRouteAuthorizer</code> | Optional authorizer. |

---

##### `method`<sup>Required</sup> <a name="method" id="cdk-constructs.RouteProps.property.method"></a>

```typescript
public readonly method: HttpMethod;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.HttpMethod

Http method for route.

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-constructs.RouteProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to lambda function.

---

##### `authorizer`<sup>Optional</sup> <a name="authorizer" id="cdk-constructs.RouteProps.property.authorizer"></a>

```typescript
public readonly authorizer: IHttpRouteAuthorizer;
```

- *Type:* @aws-cdk/aws-apigatewayv2-alpha.IHttpRouteAuthorizer

Optional authorizer.

---

### SingleTableDatastoreProps <a name="SingleTableDatastoreProps" id="cdk-constructs.SingleTableDatastoreProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs.SingleTableDatastoreProps.Initializer"></a>

```typescript
import { SingleTableDatastoreProps } from 'cdk-constructs'

const singleTableDatastoreProps: SingleTableDatastoreProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.SingleTableDatastoreProps.property.tableName">tableName</a></code> | <code>string</code> | Describes the name of the table. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="cdk-constructs.SingleTableDatastoreProps.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Describes the name of the table.

---

### SwaggerProps <a name="SwaggerProps" id="cdk-constructs.SwaggerProps"></a>

#### Initializer <a name="Initializer" id="cdk-constructs.SwaggerProps.Initializer"></a>

```typescript
import { SwaggerProps } from 'cdk-constructs'

const swaggerProps: SwaggerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-constructs.SwaggerProps.property.bucketName">bucketName</a></code> | <code>string</code> | Name of bucket. |
| <code><a href="#cdk-constructs.SwaggerProps.property.path">path</a></code> | <code>string</code> | Path to asset to upload to s3 (Zipped Swagger documentation). |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="cdk-constructs.SwaggerProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Name of bucket.

---

##### `path`<sup>Required</sup> <a name="path" id="cdk-constructs.SwaggerProps.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to asset to upload to s3 (Zipped Swagger documentation).

---



## Enums <a name="Enums" id="Enums"></a>

### ContextVariables <a name="ContextVariables" id="cdk-constructs.ContextVariables"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs.ContextVariables.ENV">ENV</a></code> | *No description.* |
| <code><a href="#cdk-constructs.ContextVariables.BRANCH">BRANCH</a></code> | *No description.* |

---

#### `ENV` <a name="ENV" id="cdk-constructs.ContextVariables.ENV"></a>

---


#### `BRANCH` <a name="BRANCH" id="cdk-constructs.ContextVariables.BRANCH"></a>

---


### FunctionType <a name="FunctionType" id="cdk-constructs.FunctionType"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs.FunctionType.GO">GO</a></code> | *No description.* |
| <code><a href="#cdk-constructs.FunctionType.NODEJS">NODEJS</a></code> | *No description.* |

---

Types of supported lambdas.

#### `GO` <a name="GO" id="cdk-constructs.FunctionType.GO"></a>

---


#### `NODEJS` <a name="NODEJS" id="cdk-constructs.FunctionType.NODEJS"></a>

---


### Stage <a name="Stage" id="cdk-constructs.Stage"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-constructs.Stage.DEVELOPMENT">DEVELOPMENT</a></code> | *No description.* |
| <code><a href="#cdk-constructs.Stage.PRODUCTION">PRODUCTION</a></code> | *No description.* |

---

Aws stages names.

#### `DEVELOPMENT` <a name="DEVELOPMENT" id="cdk-constructs.Stage.DEVELOPMENT"></a>

---


#### `PRODUCTION` <a name="PRODUCTION" id="cdk-constructs.Stage.PRODUCTION"></a>

---

