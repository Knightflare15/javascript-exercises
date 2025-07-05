const fibonacci = function(n) {
    if(n==0)
    return 0;
if(n<0)
{
    return "OOPS";
}
    let a = 1;
    let b = 1;
    if(n==1 || n==2)
    {
        return a;
    }
    for(var i = 3;i<=n;i++)
    {
        let tmp = b;
        b=a+b;
        a=tmp
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
