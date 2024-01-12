i=1;
while(i<=5)
{
    console.log(i);
    i++;
}

//movie guess
console.log("favourite movie guess");
let fav="avatar";
let guess=prompt("enter movie name");
while((fav!=guess )&& (guess!="quit"))
{  
    guess=prompt("wrong guess try again");
}
if(guess==fav)
{
    console.log("congrats");
}
else
{
    console.log("you quit");
}

//break
i=1;
while(i<=5)
{
    console.log(i);
    if(i==3)
    {
        break;

    }
    i++;
}


