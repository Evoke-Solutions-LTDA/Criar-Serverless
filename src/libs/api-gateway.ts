import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, "body"> & {
  body: FromSchema<S>;
};
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<
  ValidatedAPIGatewayProxyEvent<S>,
  APIGatewayProxyResult
>;

const HEADERS = {
  "Access-Control-Allow-Headers":
    "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE,OPTIONS",
  "Content-Type": "application/json",
};

const HEADERSText = {
  "Access-Control-Allow-Headers":
    "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE,OPTIONS",
  "Content-Type": "application/json",
};

export const formatJSONResponse = (response: Record<string, unknown>) => {
  return {
    statusCode: 200,
    headers: HEADERS,
    body: JSON.stringify(response),
  };
};

export const formatJSONResponseText = (response: Record<string, unknown>) => {
  return {
    statusCode: 200,
    headers: HEADERSText,
    body: JSON.stringify(response),
  };
};

export const formatJSONResponseFail = (
  response: Record<string, unknown>,
  statusCode?: number
) => {
  console.log("statusCode: ", statusCode);
  return {
    statusCode: statusCode || 400,
    headers: HEADERS,
    body: JSON.stringify(response),
  };
};
