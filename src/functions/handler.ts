/* eslint-disable import/group-exports */
// Error: ENOENT: no such file or directory, stat 'rverless-users/.build/.serverless'
// src/libs/lambda.ts line 19 has a strange error because of the build process i was checking

/*
Task 11:
Configure Github pipeline to deploy the Lambda functions to AWS automatically each time you push 
new code to the “main” branch.

Use the same repo.

Send me the PR and a screenshot of a call to a function deployed automatically by the pipeline run.

Tips:

https://github.com/flaviostutz/aws-serverless-static-website/blob/main/.github/workflows/dev-deploy.yml

https://github.com/flaviostutz/gh-workflows-serverless
*/


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
