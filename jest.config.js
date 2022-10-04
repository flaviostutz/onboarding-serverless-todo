/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
      '\\.^.+\\.jsx?$': 'esbuild-jest',
    },
};




// "transform": {
//   "^.+\\.jsx?$": [
//     "esbuild-jest-transform",
//     {
//       "target": "ESNEXT",
//       sourcemap: true, // correct line numbers in code coverage

//     },
//   ],
// },
