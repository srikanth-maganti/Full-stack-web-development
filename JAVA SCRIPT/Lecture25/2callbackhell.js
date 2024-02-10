let h1=document.querySelector("h1");
function changecolor(color,delay,nextcolorchange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextcolorchange) nextcolorchange();
    },delay);
    
}
changecolor("red",1000,()=>
{   changecolor("green",1000,()=>{
        changecolor("orange",1000,()=>{
            changecolor("yellow",1000);
        });
    });
});


function savetodb(data,success ,failure)
{
    let internet=Math.floor(Math.random()*10)+1;
    if(internet>4)
    {
        success(data);
    }
    else{
        failure();
    }
}

savetodb("apnacollege",
    (data)=>{
        console.log("data saved1",data);
        savetodb("srikanth",
        (data)=>
        {
            console.log("data saved2",data);
            savetodb("maganti",
            (data)=>
            {console.log("data saved3",data);},
            ()=>{console.log("not saved 3");}
            );
        },
        ()=>
        {
            console.log("data not saved2");
        });
    },
    ()=>
    {
        console.log("data not saved");
    }
)

