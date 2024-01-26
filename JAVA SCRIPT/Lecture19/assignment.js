//write  a program of funtction that returns array elements larger than a number
function largerelmts(arr,num)
{    let b=[];
    for(i of arr)
    {
        if(i>num)
        {
            b.push(i);
        }
    }
    return b;
}

let a=[2,4,5,3,6];
console.log(largerelmts(a,3));


//write a function to extract unique chareacters from a string
function uniquechar(str)
{
    let ans="";
    for(let i=0;i<str.length;i++)
    {   if(ans.indexOf(str[i])==-1)
        {
            ans=ans+str[i];
        }
    }
    return ans;
}

console.log(uniquechar("aaabcccsddfsss"));


//question 3
function longest(arr)
{   let max=0;
    let str="";
    for(let i of arr)
    {
        if(i.length>max)
        {
            str=i;
        }
    }
    return str;
}

let country = ["Australia", "Germany", "United States of America"];
console.log(longest(country));


//Write a JavaScript function to count the number of vowels in a String
//argument
function noofvowels(str)
{   let c=0;
    str=str.toLowerCase();
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=="a" || str[i]=="e" || str[i]=="i"|| str[i]=="o"||str[i]=="u")
        {
            c++;
        }
    }
    return c;
}

console.log(noofvowels("srikanth"));


//Write a JavaScript function to generate a random number within a range
//(start, end).

function random(start,end)
{   let diff=end-start;
    let n=Math.floor(Math.random()*diff)+start;
    return n;
}
console.log(random(3,7));