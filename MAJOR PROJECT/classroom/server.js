const express=require("express");
const app=express();
const posts=require("./routes/post.js");
const users=require("./routes/user.js");
const cookieParser=require("cookie-parser");
app.use(cookieParser("secretcode"));



app.get("/greet",(req,res)=>{
    let {name="sri"}=req.cookies;
    res.send(`hi ${name}`);
})

app.get("/getsigned",(req,res)=>{
    res.cookie("made-in","india",{signed:true});
    res.send("hello");
})

app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verified");
})
app.get("/getcookies",(req,res)=>{
    res.cookie("greet","hello");
    res.cookie("name","value");
    res.send("i am srikanth");
})
app.use("/users",users);


app.use("/posts",posts);


app.listen(8080,()=>{
    console.log("server started listening to port 8080");
})


