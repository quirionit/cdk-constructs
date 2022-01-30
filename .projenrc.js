const { awscdk } = require('projen');
const {
  NodePackageManager, NpmAccess,
} = require('projen/lib/javascript');

const cdkVersion = '2.9.0';

const project = new awscdk.AwsCdkConstructLibrary({
  name: '@quirion/cdk-constructs',
  description: 'CDK - constructs',
  repository: 'https://github.com/quirionit/cdk-constructs.git',

  licensed: true,
  license: 'MIT',

  authorName: 'Tobias Kleemann',
  authorUrl: 'https://www.quirion.de',
  authorOrganization: true,

  stability: 'experimental',
  keywords: [
    'cdk',
    'constructs',
    'serverless',
    'quirion',
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
    `@aws-cdk/aws-apigatewayv2-alpha@${cdkVersion}-alpha.0`,
    `@aws-cdk/aws-lambda-go-alpha@${cdkVersion}-alpha.0`,
  ],
  peerDeps: [
    `@aws-cdk/aws-apigatewayv2-alpha@${cdkVersion}-alpha.0`,
    `@aws-cdk/aws-lambda-go-alpha@${cdkVersion}-alpha.0`,
  ],
});

project.synth();