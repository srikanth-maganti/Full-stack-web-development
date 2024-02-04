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