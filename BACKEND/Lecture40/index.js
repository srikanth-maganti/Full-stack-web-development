const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const chat=require("./models/chat.js");
const methodoverride=require("method-override");
const ExpressError=require("./ExpressError.js");


app.use(methodoverride("_method"));


//connection 
main().then((res)=>{
    console.log("successful connection");
})
.catch((err)=>{
    console.log("error while connecting");
})
async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}





app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());



//server
app.listen(3000,()=>{
    console.log("server started listneing to 3000");
});

app.get("/chats",async (req,res,next)=>{
    try
    {
        let chats=await chat.find();
    
        res.render("home.ejs",{chats});
    }
    catch(err)
    {
        next(err);
    }
   
});

app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"page not found");
    res.render("form.ejs");
})


//create route
app.post("/chats",async(req,res,next)=>{
    try{
        let {from,to,msg}=req.body;
        let newchat=new chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date(),
    });
    await newchat.save();
    res.redirect("/chats");
    }
    catch(err)
    {
        next(err);
    }
    
    //     .then((res)=>{
    //         console.log("chat saved");
            
    //     })
    //     .catch((err)=>{
    //         console.log("error");
    //     })

    

   
});

app.get("/chats/:id/edit",async(req,res,next)=>{
    try
    {let {id}=req.params;
    let reqchat=await chat.findById(id)
    res.render("edit.ejs",{reqchat});}
    catch(err)
    {
        next(err);
    }
    
})


function asyncwrap(fn)
{
    return function(req,res,next){
        fn(req,res,next).catch((err)=>{
            next(err);
        });
    }
}
app.get("/chats/:id",asyncwrap(async (req,res,next)=>{
//    try
//    {
    let {id}=req.params;
    let reqchat=await chat.findById(id);
    if(!reqchat)
    {
        return next(new ExpressError(404,"caht not found"));
    }
    res.render("edit.ejs",{reqchat});
//    }
//    catch(err)
//    {
//     next(err);
//    }
}))


//update
app.put("/chats/:id",async(req,res,next)=>{
  try{
      
    let {id}=req.params;
    let {msg:newmsg}=req.body;
    let updated= await chat.findByIdAndUpdate(id,{msg:newmsg},{new:true});
    console.log(updated);
    res.redirect('/chats');
  }
  catch(err)
  {
    next(err);
  }

})


//destroy
app.delete("/chats/:id",async(req,res,next)=>{
    try
    {
        let {id}=req.params;//(cast err=id-->_id)
    let c=await chat.findByIdAndDelete(id);
    
    res.redirect("/chats");
    }
    catch(err)
    {
        next(err);
    }

})
let handleerror=(err)=>{
    console.log("valdidation error");
    console.dir(err.message);
    return err;
}
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name==="ValidationError")
    {
        err=handleerror(err);
    }
    next(err);
})
app.use((err,req,res,next)=>{
    let {status=500 , message="random error"}=err;
    res.status(status).send(message);
});






// let chat1=new chat({
//     from:"Srikanth",
//     to:"sri",
//     msg:"hi how r u?",
//     created_at:new Date()
// });


// chat1.save();


