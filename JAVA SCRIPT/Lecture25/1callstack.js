function hello()
{
    console.log("hello");
    console.log("inside the hello");
}

function demo()
{
    console.log("inside the demo");
    hello();
}
demo();


//funtion
function one()
{
    return 1;
}

function two()
{
    return one()+one();
}
function three()
{
    let ans= two()+one();
    console.log(ans);
}
three();



