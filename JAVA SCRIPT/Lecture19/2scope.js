
//function scope
let sum=99;//global scope
function calcsum(a,b)
{
    let sum=a+b;//function scope
    console.log(sum);
}
calcsum(2,3);
console.log(sum);



//block scope
{
    let a=24;
}
//console.log(a);//error

for(let i=1;i<10;i++)
{
    console.log(i);
}
//console.log(i);

let age=16;
if(age>18)
{
    let str="adult";
}
else{
    let str="not adult";
}
//console.log(str);


//lexical scope
function outer()
{   let x=4;
    let y=6;
    function inner()
    {   let a=4;
        console.log(x);
        console.log(y);
    }
    //console.log(a);  lexical scope
    inner();
}
outer();


function outter()
{   
    function inner()
    {   let a=4;
        console.log(x);
        console.log(y);
    }
    //console.log(a);  lexical scope
    let x=4;
    let y=6;
    inner();
   
    
}
outter();