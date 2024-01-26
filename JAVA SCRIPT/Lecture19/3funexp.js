//function expressions
let sum=function(a,b)
{
    return a+b;
}

console.log(sum(3,4));


let hello=function()
{
    console.log("hello");

}
hello();
hello=function()
{
    console.log("namate");
}
hello();




//higher order funtion

hello=function()
{
    console.log("hello");
}
function multiplehello(fun,n)
{
    for(let i=1;i<n;i++)
    {
        fun();
    }
    fun();

}

multiplehello(hello,5);
multiplehello(function(){console.log("namate");},5);



//return function  in higher order function
function oddoreven(request)
{
    if(request=="odd")
    {
        return function(n)
        {
            console.log(!(n%2==0));
        }
    }
    else if(request=="even")
    {
        return function(n)
        {
            console.log(n%2==0);
        }
    }
    else{
        console.log("wrong request");
    }
}


let func=oddoreven('even');
let func1=oddoreven("odd");

