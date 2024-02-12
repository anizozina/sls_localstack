import type { AWS } from '@serverless/typescript';
import { default as sampleFunction } from './src';

const serverlessConfiguration: AWS = {
  service: 'sample-functions',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-localstack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
    region: 'ap-northeast-1',
    stage: '${opt:stage, self:custom.defaultStage}',
    environment: {
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: {
    sampleFunction,
  },
  custom: {
    defaultStage: 'local',
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node18',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    localstack: {
      stages: ['local'],
      host: 'http://localhost',
      port: 4566,
      autostart: false,
      debug: true,
    },
  },
};

module.exports = serverlessConfiguration;
