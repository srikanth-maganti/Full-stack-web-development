let url="https://catfact.ninja/fact";
/*
fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data1)=>{
    console.log(data1);
    return fetch(url);
})
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data2)=>{
    console.log(data2);
})
.catch((err)=>
{
    console.log(err);
});*/


//using await and async
async function demo()
{
   let res= await fetch(url);
   let data=await res.json();
   await console.log(data.fact);
   let res2=await fetch(url);
   let data2=await res2.json();
   console.log(data2.fact);
}