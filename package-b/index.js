const isOdd = require('is-odd');
const sum = require('@my-workspaces-powered-project/package-a');

module.exports = function printSum(a, b) {
  console.log('a ' + (isOdd(a) ? 'is' : 'is not') + ' odd');
  console.log('b ' + (isOdd(b) ? 'is' : 'is not') + ' odd');
  console.log('Hello from package-b: ' + sum(a, b));
};

