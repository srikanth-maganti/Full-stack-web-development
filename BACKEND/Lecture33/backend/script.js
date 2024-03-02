let express=require("express");
let app=express();
let port=3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(port,()=>{
    console.log("started listening to port:",port);
});

app.get("/register",(req,res)=>{
    let {username}=req.query;
    res.send(`welcome to get request ${username}`);
});

app.post("/register",(req,res)=>{
    console.log(req.body);
    res.send("welcome to post request");
})