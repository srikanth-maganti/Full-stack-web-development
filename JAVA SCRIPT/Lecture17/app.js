for(let i=1;i<=5;i++)
{
    console.log(i);
}

for(i=10;i>0;i--)
{
    console.log(i);
}

//print all odd nubers
for(i=1;i<=15;i++)
{
    if(i%2==1)
    {
        console.log(i);
    }
}

for(i=15;i>=1;i=i-2)
{
    console.log(i);
}


//infinte loop
/*for(i=0; ;i++)
{
    console.log(i);
}*/

//table
let n=prompt("enter a num");
n=parseInt(n);
for(i=n;i<=n*10;i+=n)
{
    console.log(i);
}



//nested loop
for(i=1;i<=3;i++)
{
    console.log(`outer loop ${i}`);
    for(let j=1;j<=3;j++)
    {
        console.log(j);
    }

}

