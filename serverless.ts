import type { AWS } from '@serverless/typescript';

import helloWorld from "@functions/helloWorld";

const serverlessConfiguration: AWS = {
  service: "pix-defibanksolutions",
  frameworkVersion: "3",
  plugins: [
    "serverless-esbuild",
    "serverless-offline",
    "serverless-dotenv-plugin",
    "serverless-domain-manager",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    region: "sa-east-1",
    stage: "production",
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
      domainName: "pix.defibanksolutions.com",
      basePath: "v1",
      stage: "production",
      endPointType: "edge",
      certificateArn:
        "arn:aws:acm:us-east-1:604201048981:certificate/d665352d-cc3e-4f06-a893-5a72fd828b4b",
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
