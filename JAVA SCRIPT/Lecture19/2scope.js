let sum=99;//global scope]]]
function calcsum(a,b)
{
    let sum=a+b;//function scope
    console.log(sum);
}
calcsum(2,3);
console.log(sum);


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
console.log(str);