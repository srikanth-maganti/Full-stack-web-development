/*let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>
{
    let fact=await getfact(); 
     p.innerText=fact;

});
let p=document.querySelector("p");
let url="https://catfact.ninja/fact";
async function getfact()
{   try{
    let res=await axios.get(url);
    return res.data.fact;
   
    }
    catch(err)
    {
        return "no fact found";
    }

}*/
/*
let url2="https://dog.ceo/api/breeds/image/random";
let btn1=document.querySelector(".btn");
btn1.addEventListener("click",async ()=>{
    let imgs=await getimage();
    let img=document.querySelector("img");
    img.src=imgs;
    
});

async function getimage()
{
    let res=await axios.get(url2);
    return res.data.message;
}


*/

//passing headers
let url="https://icanhazdadjoke.com/"
async function getfact()
{   try{
    let config={headers:{Accept:"application/json"}};
    let res=await axios.get(url,config)
    console.log(res);
    }
    catch(er)
    {
        console.log("error");
    }

}