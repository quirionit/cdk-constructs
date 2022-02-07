const { awscdk } = require('projen');
const {
  NodePackageManager, NpmAccess,
} = require('projen/lib/javascript');

const cdkVersion = '2.9.0';

const project = new awscdk.AwsCdkConstructLibrary({
  name: '@quirionit/cdk-constructs',
  description: 'CDK - constructs',
  repository: 'https://github.com/quirionit/cdk-constructs.git',

  licensed: true,
  license: 'Apache-2.0',

  authorName: 'Tobias Kleemann',
  authorUrl: 'https://www.quirion.de',
  authorOrganization: true,

  stability: 'experimental',
  keywords: [
    'cdk',
    'constructs',
    'serverless',
    'quirion',
    'swagger',
    'gateway',
    'lambda',
    'website',
    'dynamo',
    'microservice',
  ],

  packageManager: NodePackageManager.NPM,
  npmAccess: NpmAccess.PUBLIC,

  cdkVersion,
  cdkVersionPinning: false,

  defaultReleaseBranch: 'master',
  releaseToNpm: true,
  release: {
    releaseEveryCommit: true,
  },

  gitignore: [
    '.idea',
  ],
  deps: [
    `@aws-cdk/aws-apigatewayv2-authorizers-alpha@${cdkVersion}-alpha.0`,
    `@aws-cdk/aws-apigatewayv2-integrations-alpha@${cdkVersion}-alpha.0`,
  ],
  devDeps: [
    'aws-lambda',
    '@types/aws-lambda',
    'esbuild@0',
    `@aws-cdk/aws-apigatewayv2-alpha@${cdkVersion}-alpha.0`,
    `@aws-cdk/aws-lambda-go-alpha@${cdkVersion}-alpha.0`,
  ],
  peerDeps: [
    `@aws-cdk/aws-apigatewayv2-alpha@${cdkVersion}-alpha.0`,
    `@aws-cdk/aws-lambda-go-alpha@${cdkVersion}-alpha.0`,
  ],
});

project.synth();