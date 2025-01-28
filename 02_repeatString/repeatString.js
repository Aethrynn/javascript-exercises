const repeatString = function(text, numOfRepeats) {

    let repeatedString = '';

    if(numOfRepeats >= 0) {
        for (let i = 0; i < numOfRepeats; i++) {
            repeatedString = repeatedString + text;
        }
    } else {
        return "ERROR";
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
