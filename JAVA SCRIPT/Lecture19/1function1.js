function hello()
{   for(i=1;i<5;i++)
    {
    console.log("hello");
    }
}

hello();


function isadult()
{
    let age=18;
    if(age>18)
    {
        console.log("adult")
    }
    else{
        console.error("not adult")
    }
}
isadult();



//practice question
function printpoem()
{
    console.log("twinkle twinkle little star");
}
printpoem();


//practice question
console.log("roll a die");
function rolldie()
{
    let n=Math.floor(Math.random()*6)+1;
    console.log(n);
}
rolldie();