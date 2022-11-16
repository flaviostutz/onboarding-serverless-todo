/* eslint-disable consistent-return */
/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-else-return */
/* eslint-disable complexity */
/* eslint-disable import/group-exports */

import https from 'https';
import { v4 } from "uuid";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import AWS from 'aws-sdk';
import axios from 'axios';
import AWSXRay from 'aws-xray-sdk-core';

AWSXRay.captureHTTPsGlobal(https);
const aws = AWSXRay.captureAWS(AWS);
const docClient = new aws.DynamoDB.DocumentClient();
const tableName = "UsersListNext";

// this func calls the randomuser api, where we extract the 3 properties from for our POST call
const getData = async () => {
  const httpResponse = await axios.get('https://randomuser.me/api/?inc=phone,picture,location');
  const userData = httpResponse.data.results[0];
  const { coordinates } = userData.location;
  const phoneNumber = userData.phone;
  const picture = userData.picture.medium;
  return { coordinates, phoneNumber, picture };
};

// this api creates a user in dynamodb, with a randomId and the random data retrieved from
// randomuser api, and the reqBody from your post call
export const createUser = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const reqBody = JSON.parse(event.body as string);
  const userData = await getData();

  const user = {
    ...reqBody,
    ...userData,
    // userId: v4 is a way of creating a random Id for every user.
    userID: v4(),
  };

  await docClient
    .put({
      TableName: tableName,
      Item: user,
    })
    .promise();

  if (!reqBody.birth_date || !reqBody.city || !reqBody.name) {
    return {
      statusCode: 422,
      body: JSON.stringify({ error: "Not all the fields are filled in!" }),
    };
  } else {
    return {
      statusCode: 201,
      body: JSON.stringify(user),
    };
  }
};

// this api returns all data(all the user) in the dynamodb table
export const getUsersList = async (): Promise<APIGatewayProxyResult> => {

  const dynamoTable = {
    TableName: tableName,
  };
  const data =
    await docClient
    .scan(dynamoTable)
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify(data),
  };
};

// this api returns one specific user when you ask for the userID provided when the user is created
export const getUserById = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const id = event.pathParameters?.id;

  const getAllData = await docClient
    .get({
      TableName: tableName,
      Key: {
        userID: id,
      },
    })
     .promise();

  if (!getAllData.Item) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: "Not Found" }),
    };
  }
  return {
    statusCode: 201,
    body: JSON.stringify(getAllData.Item),
  };
};

export const troubleMaker = async (event: APIGatewayProxyEvent) => {
  const clientParam = event.pathParameters?.whichOne;

  if (clientParam === "exception") {
    return {
      statusCode: 422,
      body: JSON.stringify({ error: "exception on purpose" }),
    };
  } else if (clientParam === "latency") {
    // throw new Error('Authentication Failed');
    // this one throws the err and email will be sent

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: "We just waited for a second!" }),
    };
  } else if (clientParam === "status") {
    throw new Error('Authentication Failed');
  }
};
