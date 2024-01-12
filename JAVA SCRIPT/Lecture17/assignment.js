/*let arr=[1,2,3,45,6,2,3];
let num=prompt("enter num to be delete");

for(let i=0;i<arr.length;i++)
{
    if(arr[i]==num)
    {
        arr.splice(i,1);
        i--;
    }
}
for(i of arr)
{
    console.log(i);
}
*/



//-----

/*
let num=prompt("enter number");
num=parseInt(num);
let num1=num;
let c=0;
while(num>0)
{   num=Math.floor(num/10);
    c++;

}
console.log(c);

let s=0;
while(num1>0)
{
    let r=num1%10;
    s=s+r;
    num1=Math.floor(num1/10);

}
console.log(s);

*/
/*
let f=prompt("enter a num");
f=parseInt(f);
let fact=1;
for(let i=f;i>=1;i--)
{
    fact=fact*i;

}   
console.log(fact);
*/

let arr=[1,2,4,55,3,4];
let large=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>=large)
    {
        large=arr[i];
    }
}
console.log(large);
