const reverseString = function(stringToReverse) {
    let reversed = '';

    for(let i = stringToReverse.length; i >= 0; i--){
        reversed = reversed + stringToReverse.charAt(i);
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
