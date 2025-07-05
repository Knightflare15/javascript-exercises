const palindromes = function (arr) {
    let flag = true;
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let a = arr.toLowerCase().split("").filter((ax)=>alphanumerical.includes(ax)).join("");
    let len = a.length;
    for(var i =0;i<len;i++)
    {
        if(a[i]!=a[len-i-1])
        {
            flag = false;
            break;
        }
    }
    return flag;

};

// Do not edit below this line
module.exports = palindromes;
