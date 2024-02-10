/*function num(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let i=Math.floor(Math.random()*10)+1;
        
        console.log(i);
        resolve();
        },1000);
        
    });
}
async function demo()
{
    await num();
    await num();
    num();
}*/


let h1=document.querySelector("h1");
function changecolor(color,delay)
{
    return new Promise((resolve,reject)=>{
        let i=Math.floor(Math.random()*10)+1;
        if(i>5)
        {
            reject("rejected");
        }
        else{
            setTimeout(()=>{
           
                h1.style.color=color;
                console.log("coler chnaged",color);
                resolve();
            },delay);
        }
        
       
    });
}

async function demo()
{   try{
    await changecolor("red",1000);
    await changecolor("yellow",1000);
    await changecolor("pink",1000);
    await changecolor("green",1000);
    }
    catch(err)
    {
        console.log("error catched");
    }
    

   console.log("hllo ekkadunav");


}
