const express=require("express");
const app=express();


//create a middleware for an api that checks if the access toen was  passed in the query string or not
let checktoken=("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="give access")
    {
        next();
    }
    else
    {
        throw new Error("ACCESS DENIED");
    }

})

app.get("/api",checktoken,(req,res)=>{
    res.send("fata");
})

app.listen(3000,()=>{
    console.log("server started listening to 3000 port");
})