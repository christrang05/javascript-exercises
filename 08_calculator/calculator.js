const add = function(add1, add2) {
	return add1 + add2;
};

const subtract = function(sub1, sub2) {
	return sub1 - sub2;
};

const sum = function(sumArray) {
	return sumArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(mulArray) {
  return mulArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
	if (n ===0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
