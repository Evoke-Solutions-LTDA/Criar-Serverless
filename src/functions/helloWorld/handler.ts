import { formatJSONResponse } from "../../libs/api-gateway";
import { middyfy } from "../../libs/lambda";

const helloWorld = async () => {
  return formatJSONResponse({ hello: "Hello World" });
};

export const main = middyfy(helloWorld);
