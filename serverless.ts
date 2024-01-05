import type { AWS } from '@serverless/typescript';

import helloWorld from "@functions/helloWorld";

const serverlessConfiguration: AWS = {
  service: "indigo-weekly",
  frameworkVersion: "3",
  plugins: [
    "serverless-esbuild",
    "serverless-offline",
    "serverless-domain-manager",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs18.x",
    region: "sa-east-1",
    stage: "dev",
    timeout: 30,
    memorySize: 256,
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    iam: {
      role: {
        statements: [
          {
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Resource: "*",
          },
        ],
      },
    },
  },
  // import the function via paths
  functions: {
    helloWorld,
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    customDomain: {
      domainName: "indigo.warriorvikingnft.com",
      basePath: "v1",
      stage: "production",
      endPointType: "edge",
      certificateArn:
        "arn:aws:acm:us-east-1:654407031941:certificate/2ccd6eb5-2a7a-4eed-ac8e-2c16136dfecf",
      createRoute53Record: true,
      enabled: true,
      securityPolicy: "tls_1_2",
      cors: {
        origin: "*",
        headers: ["Content-Type"],
        methods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
      },
    },
    "serverless-offline": {
      httpPort: 3333,
      reloadHandler: true,
    },
  },
};

module.exports = serverlessConfiguration;
