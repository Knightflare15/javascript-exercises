const convertToCelsius = function(a) {
  return (Math.round((a-32)*(5/9)*10))/10;
};

const convertToFahrenheit = function(b) {
    return (Math.round(((b)*(9/5)+32)*10))/10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
