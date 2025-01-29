const convertToCelsius = function(fahrenheitTemp) {

  let convertedTemp = ((fahrenheitTemp - 32) * (5/9));

  if(!Number.isInteger(convertedTemp)) {
    convertedTemp = parseFloat(convertedTemp.toFixed(1));
  }

  return convertedTemp
};

const convertToFahrenheit = function(celsiusTemp) {
  
  let convertedTemp = ((celsiusTemp * 9/5) + 32);

  if(!Number.isInteger(convertedTemp)) {
    convertedTemp = parseFloat(convertedTemp.toFixed(1));
  }

  return convertedTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
