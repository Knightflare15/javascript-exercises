const sumAll = function(a,b) {
    let sumE = 0;
    if(!Number.isInteger(a) || !Number.isInteger(b) || a<0 || b <0)
    {
        return "ERROR";
    }
    for(var i =a;i<=b;i++)
    {
        sumE+=i;
    }
    for(var i =b;i<=a;i++)
    {
        sumE+=i;
    }

    return sumE;

};

// Do not edit below this line
module.exports = sumAll;
