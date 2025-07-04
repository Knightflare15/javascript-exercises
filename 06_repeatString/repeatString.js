const repeatString = function(word , a) {
    if(a<0)
    {
        return "ERROR";
    }
    let result = ""
    for(var i =0;i<a;i++)
    {
        result += word;
    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;
