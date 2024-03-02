let express=require("express");
let app=express();
let path=require("path");
app.set("view engine","ejs");
app.set("path",path.join(__dirname,"/views"));
app.listen(3000,()=>{
    console.log("server started");
});

app.get("/ig/:username",(req,res)=>{

    let {username}=req.params;
    let data=require("./data.json");
    let userdata=data[username];
    if(userdata)
    {
        res.render("instagram.ejs",{data:userdata});
    }
    else
    {
        res.render("error.ejs");
    }
    
});