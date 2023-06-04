const sum = require('@my-workspaces-powered-project/package-a');

module.exports = function printSum(a, b) {
  console.log('Hello from package-b: ' + sum(a, b));
};

