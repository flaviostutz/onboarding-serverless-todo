/* eslint-disable import/group-exports */
// Error: ENOENT: no such file or directory, stat 'rverless-users/.build/.serverless'
// src/libs/lambda.ts line 19 has a strange error because of the build process i was checking


const usersArray =
  [{
    id: 0,
    name: 'John',
    birthdate: "02-02-1990",
    city: "Amsterdam",
  },
  {
    id: 1,
    name: 'Henk',
    birthdate: "02-02-1988",
    city: "Rotterdam",
  }];

// eslint-disable-next-line import/no-commonjs, @typescript-eslint/explicit-function-return-type
module.exports.person = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: usersArray,
        statusCode: 200,
        input: event,
      },
      null,
      2,
    ),
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, import/no-commonjs
module.exports.personId = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Successfully retrieved a specific user!',
        result: usersArray[event.pathParameters.id],
        statusCode: 200,
        input: event,
      },
      null,
      2,
    ),
  };
};
