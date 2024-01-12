console.log("srikanth");
console.log("abc",22);
console.log("my bad","hello",23);




//template literals
let pencil=4;
let erasor=5;
console.log("total",pencil+erasor,"rupees");

//let result="total"+(pencil+erasor)+"rupees";
//console.log(result);

console.log(`total priceis ${pencil+erasor} rupees`);
console.log(`srikanth is ${100} sure`);







//operators

//arithmetic operators
let a=2;
let b=4;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);

//unary operators
console.log(a++);
console.log(++b);

//assignment operators
a+=5;
console.log(a);


//comparision operators
console.log(a>b);
console.log(a==b);

let x=123;
let y="123";
console.log(x==y);//true
console.log(x===y);//false
console.log(0=='');//true
console.log(0==='');//false
console.log(0==false);//true
console.log(0===false);//true
console.log(null==undefined);//true
console.log(null===undefined);//false
console.log("a">"A");

//logical operators
let marks=15;
if((marks>=24 && marks<=80) || !(marks>=30 && marks<=90) )
{
    console.log("pass");
    console.log("A+");
}

else
{
    console.log("fail");
}

