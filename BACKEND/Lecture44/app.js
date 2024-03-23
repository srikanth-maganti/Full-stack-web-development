const express=require("express");
const app=express();
const ExpressError=require("./ExpressError/ExpressError");

app.use("/random",(req,res,next)=>{
    let {q}=req.query;
    if(q==="give")
    {
        next();
    }
    throw new ExpressError(400,"access denied");
})
app.get("/random",(req,res)=>{
    res.send("random");
})

app.get("/err",(req,res)=>{
    abcd=abcd;
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"fobiden access");
})

// app.use((err,req,res,next)=>{
//     let {status=500,message}=err;
//    res.status(status).send(message);
    
// })

// app.use((err,req,res,next)=>{
//     console.log('err2');
//     next();
// })

// app.use("/",(req,res,next)=>{
//     console.log("hello");
//     res.send("hello");
// })


app.listen(3000,()=>{
    console.log("server started listening to port 3000");
})
