import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { APIGatewayProxyResultV2 } from 'aws-lambda/trigger/api-gateway-proxy';

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
  console.log(event);
  return {
    statusCode: 200,
  };
};
