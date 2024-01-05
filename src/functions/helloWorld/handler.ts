import { middyfy } from "../libs/lambda";

const helloWorld = async () => {
  return { hello: "Hello World" };
};

export const main = middyfy(helloWorld);
