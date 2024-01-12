let max=prompt("enter max value");
let num=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the num");
while(guess!=num)
{
   
    if(guess=="quit")
    {   console.log("u quited");
        break;
    }
    if(guess>num)
    {   
        guess=prompt("ur guess is large plese try again ");
    }
    else if(guess<num)
    {
       
        guess=prompt("ur gues is small plese try again");
    }
}
if(guess==num)
{
    console.log("correct guess");
}
