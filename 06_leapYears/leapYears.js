const leapYears = function(year) {
    // figure out if a year is divisble by 4
    // if it's year divisible by 100, but not 400, it's not a leap year
    if(year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
