const express=require("express");
const app=express();
//loooger
// app.use((req,res,next)=>{
//     req.time=new Date(Date.now());
//     console.log(
//         req.method,req.path,req.time
//     );
//     next();
//     // console.log(req.query);
//     // res.send("middleware");
// })



app.use("/rand",(req,res,mext)=>{
    console.log("i am only for random");
    mext();
})

app.use((req,res,next)=>
{   console.log("middle ware 2");
     return next();
     //do not write anything
})

app.get("/",(req,res)=>{
    res.send("home");
})

app.get("/rand",(req,res)=>{
    
    res.send("rend");
})



app.listen(3000,()=>{
    console.log("server started listening to poprt 3000");
})

// app.use((req,res)=>{
//     res.status(500).send("page not found");
// })