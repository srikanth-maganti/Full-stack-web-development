let express=require("express");
let app=express();


app.get("/",(req,res)=>{
    res.send("home");
})
app.get("/home",(req,res)=>{
    res.send("routefghj");
})
app.get("/home/book",(req,res)=>{
    res.send("he;;;;;");
})


app.listen(3000,(req,res)=>{
    console.log("server started");
})
app.get("/username/:name",(req,res)=>{
    let name=req.params;
    console.log(name);
    res.send("ok");
})
app.get('/search',(req,res)=>{
    let q=req.query;
    console.log(q);
    res.send('okk');
})

app.post('/form',(req,res)=>{
    console.log(req.body);
})
app.use((req,res)=>{
    res.send("hellop");
})



