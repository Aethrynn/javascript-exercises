const removeFromArray = function(originalArray, ...valuesToRemove) {
    let updatedArray = [];

    for(const value of originalArray){
        if (!valuesToRemove.includes(value)) {
            updatedArray.push(value);
        }
    }

    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
