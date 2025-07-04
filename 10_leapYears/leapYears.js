const leapYears = function(a) {
    if(a%100 === 0)
    {
        return a%400 === 0;
    }
    return a%4 === 0;

};

// Do not edit below this line
module.exports = leapYears;
