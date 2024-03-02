const express=require("express");
const app=express();
let port=3000;

//starting server
app.listen(port,()=>{
    console.log("server started");
});



//listening any request and response
/*app.use((req,res)=>{
    let code="<h1>srikanth</h1><ul><li>student</li><li>artist</li></ul>"
    res.send(code);
    
});*/


//listening specific request to specific route

/*app.get("/",(req,res)=>{
    res.send("this is home");
});*/

app.get("/maganti",(req,res)=>{
    res.send("this is mags page");
});

app.get("/srikanth",(req,res)=>{
    res.send("this is srikath page");

});
/*
app.get("*",(req,res)=>{
    res.send("this path does not exist");
});
*/
app.post("/",(req,res)=>{
    res.send("this is called by post method");
});


//path parameters
/*app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    res.send(`<h1>welcome to ${username}'s page</h1>`);
});*/


//query string
app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q}=req.query;
    if(!q)
    {
        res.send("no search");
    }
    res.send("u searched for q");
});