//comditonal stamtements

//examples of conditional stmts
//example1
let age=25;
if(age>=18)
{
    console.log("you can do anything u want");
   
}
else if(age<18)
{
    console.log("you cannot vote");
}

//example2
let marks =45;
if(marks<30)
{
    console.log("fail");
}
else if(marks>=30 && marks<=50)
{
    console.log("C");
}
else if(marks>50 && marks<=89)
{
    console.log("B");
}
else
{
    console.log("A");
}

//example3
console.log("nested statements");
marks=85;
if(marks>=30)
{
    console.log("pass");
    if(marks>=80)
    {
        console.log("ex")
    }
    else
    {
        console.log("a");
    }
}
else{
    console.log("fail")
}


//truthy and falsy
if(""&&NaN && undefined && 0)
{
    console.log("truth");
}
else
{
    console.log("falsy");
}

console.log("next");
if(-10&&1&&"apna college"&&" ")
{
    console.log("truth");
}
else
{
    console.log("falsy");
}


let color="red";
switch(color)
{
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("ready");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("bye");
    
}
console.log("---------------------------------------------------------------");

//practise question
let c="red";
if(c=="red")
{
    console.log("stop");
}
if(c=="yellow")
{
    console.log("ready");
}
if(c=="green")
{
    console.log("go");
}



//practise question2
let size="XL";
if(size==="XL")
{
    console.log("prize is",250);
}
else if(size==="L")
{
    console.log("prize is",200);
}
else if(size==="M")
{
    console.log("prize is",100);
}
else
{
    console.log("prize is",50);
}

//practice question3
let str="apple";
if(str.length>3 && str[0]==='a')
{
    console.log("good string");
}
else
{
    console.log("not a good sting");
}


//practice question4
let day=1;
switch(day)
{
    case 1:
        console.log("sunday");
        break;
    case 2:
         console.log("monday");
        break;
    case 3:
        console.log("tuesday");
         break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("not a day");
}


