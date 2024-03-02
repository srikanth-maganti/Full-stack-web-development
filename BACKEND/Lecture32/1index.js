let express=require("express");
let app=express();
let path=require("path");
app.set("views",path.join(__dirname,"/views"));

let port=3000;
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.listen(port,()=>{
    console.log("server started");
});

app.get("/home",(req,res)=>{
    res.send("hello");
});

app.get("/rolldice",(req,res)=>{
    let dicevalue=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{dicevalue});
});