let express=require("express");
let app=express();
app.get('/',(req,res)=>{
    res.send("hello world ram");
}
)

app.listen("3000",(req,res)=>{
    console.log("server started"); 
})