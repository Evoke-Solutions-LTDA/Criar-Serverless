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
      target: "node18",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
    customDomain: {
      domainName: "example.com",
      basePath: "v1",
      stage: "production",
      endPointType: "edge",
      certificateArn: "",
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
