const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
  return numOne - numTwo;

};

const sum = function(arrayOfNumbers) {
	let sum = 0;
  arrayOfNumbers.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(arrayOfNumbers) {
  let prod = 1;
  arrayOfNumbers.forEach(element => {
    prod *= element;
  });
  return prod;
};

const power = function(numOne, numTwo) {
	let number = 1;
  if(numTwo == 0){
    return 1;
  }
  while(numTwo > 0){
    number *= numOne;
    numTwo--;
  }
  return number;
};

const factorial = function(number) { 
  let product = 1;
  for (let i = number; i > 0; i--) {
    product *= i;
  }
  return product;
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
