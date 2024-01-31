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





//function with argumants
function printinfo(name ,age)
{
    console.log(`${name}'s age is${age}`);
}
printinfo("srikanth",20);

function sum(a,b)
{
    console.log(`sum of ${a} and ${b} is ${a+b}`);

}
sum(2,3);
sum(2);


//practice question average of three numbers
function avg(a,b,c)
{
    console.log((a+b+c)/3);
}
avg(1,2,3);


//pracatice question to print multiplication
function table(n)
{
    /*for(let i=1;i<=20;i++)
    {
        console.log(`${n} x ${i} = ${i*n}`);
    }*/
    for(let i=n;i<=n*10;i+=n)
    {
        console.log(i);
    }
}
table(2);


//return stmt
function sumof(a,b)
{
    return a+b;
    console.log("heloo")//unreacheable code


}
console.log(sumof(sumof(3,4),6));


function isadult(n)
{
    if(n<18)
    {
        return "not adult";
    }
    else{
        return "adult";
    }
}

console.log(isadult(34));

//peractice question sum of 1 to n
function sum1ton(n)
{   let sum=0;
    for(let i=1;i<=n;i++)
    {
        sum=sum+i;
        }

        return sum;
}

console.log(sum1ton(8));



//practice question 
//function to concat all strings given in array 
function concat(arr)
{let s="";
    for(l of arr)
    {
        s=s+l;

    }
    return s;
}

let arr=["srikanth","maganti"];
console.log(concat(arr));


//default parameters
function sum(a,b=2)
{
    return a+b;
}
console.log(sum(2));


function add(a=2,b)
{
    return a+b;
}
console.log(add(2));//Nan
console.log(add(2,3));//5