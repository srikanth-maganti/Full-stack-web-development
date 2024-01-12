/*let num=23;
if(num%10==0)
{
    console.log("good")

}
else{
    console.log("bad");
}

let username=prompt("enter username");
let age=prompt("enter age");
alert(`${username} is ${age} years old`);


let q=1;
switch(q)
{
    case 1:
        console.log("janauary,feb,march");
        break;
    case 2:
        console.log("april,may,june");
        break;
    case 3:
        console.log("july,augst","sept");
        break;
    case 4:
        console.log("ost,nov,dec");
        break;
    default:
        console.log("eroor");
}


let str="apple";
if(str.length>=5 && (str[0]=='a'||str[0]=='A'))
{
    console.log("golden");
}
else{
    console.log("not gold");
}
*/

let a=prompt("enter 1 number");
let b=prompt("enter 1 number");
let c=prompt("enter 1 number");
if(a>b)
{
    if(a>c)
    {
        console.log(a)
    }
    else{
        console.log(c)
    }
}
else if(c>a)
{
    if(c>b)
    {
        console.log(c);
    }
    else
    {
        console.log(b);
    }
}


//check whether two numbers have same last digit or not
let x=32;
let y=47852;
if(x%10==y%10)
{
    console.log("same");
}
else
{
    console.log("not same");
}