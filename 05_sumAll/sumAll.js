const sumAll = function(number1, number2) {
    
    if (number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2)){
        return "ERROR";
    }

    if(number1 > number2) {
        startOfRange = number2;
        endOfRange = number1;
    } else {
        startOfRange = number1;
        endOfRange = number2;
    }

    const allNumbersInRange = Array.from({length: endOfRange - startOfRange + 1},(value, index) => startOfRange + index);

    let sum = 0;
    
    for(const num of allNumbersInRange) {
        sum = sum + num;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
