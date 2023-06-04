const isNumber = require('is-number');

module.exports = function sum(a, b) {
  console.log('a ' + (isNumber(a) ? 'is' : 'is not') + ' number');
  console.log('a ' + (isisNumberOdd(a) ? 'is' : 'is not') + ' number');
  return a + b;
};

