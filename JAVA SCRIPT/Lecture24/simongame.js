let userseq=[];
let gameseq=[];
let colors=["yellow","pink","red","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress",function()
{
    if(started==false)
    {  console.log("game started");
         levelup();
        
        started=true;
    }
});

function levelup()
{   
    
    userseq=[];
    let h3=document.querySelector("h3");
    h3.innerText=`highest score:${level+1}`;
    level++;
    
    h2.innerText=`LEVEL-${level}`;
    let randomidx=Math.floor(Math.random()*3);
    let randomclr=colors[randomidx];
    let btn=document.querySelector(`.${randomclr}`);
    gameseq.push(randomclr);
    console.log(gameseq);   
    flash(btn);
}

function flash(btn)
{
    btn.classList.add("flash");
    
    setInterval(function()
    {
        btn.classList.remove("flash");
    },400);
}

function checkans(idx)
{
    
    if(gameseq[idx]==userseq[idx])
    {
        if(gameseq.length==userseq.length)
        {

        setTimeout(levelup,1000);
        }
    }
    else
    {
        h2.innerHTML=`Game over!your score is ${level} <br>press any key to start again `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function reset()
{
    gameseq=[];
    userseq=[];

    level=0;
    started=false;

}

function userpress()
{
    let btn=this;
    flash(btn);
    let color=btn.getAttribute("id");
    userseq.push(color);
    checkans(userseq.length-1);

}
let btns=document.querySelectorAll(".btn");
for(btn of btns)
{
    btn.addEventListener("click",userpress);
}