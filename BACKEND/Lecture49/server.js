const express=require("express");
const app=express();
var session = require('express-session')
const flash=require("connect-flash");
const path=require("path");



app.use(flash());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(session({secret:"mysecretstring",resave:false,saveUninitialized:true}));
app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    next();
})



app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
  

    req.session.name=name;
    if(req.session.name=="anonymous")
    {
        req.flash("error","user not registered");
    }
    else{
        req.flash("success","user registered successfully");
    }
   
    res.redirect("/hello");
})
app.get("/hello",(req,res)=>{
    res.render("page.ejs",{name:req.session.name});
    });







app.get("/home",(req,res)=>{
    if(req.session.count)
    {
        req.session.count++;
    }
    else{
        req.session.count=1;
    }
    
    res.send(`no of requests ${req.session.count}`);
})
app.get("/test",(req,res)=>{
    // res.send('hello connected');
    
})

app.listen(3000,()=>{
    console.log("server started listening to 3000 port");
});