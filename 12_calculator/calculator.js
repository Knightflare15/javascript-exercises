const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let sum =0;
  a.forEach(i  => {
    sum+=i
    
  });
  return sum;
	
};

const multiply = function(a) {
  return a.reduce((product, current) => product * current);

};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let fact =1;
  for (i=1;i<=a;i++)
  {
    fact *=i;
  }
  return fact;
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
