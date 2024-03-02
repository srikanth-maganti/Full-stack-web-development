const express=require("express");
const app=express();
const path=require("path");
const mongoose=require("mongoose");
const chat=require("./models/chat.js");
const methodoverride=require("method-override");

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
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
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

app.get("/chats",async (req,res)=>{
    let chats=await chat.find();
    
    res.render("home.ejs",{chats});
});

app.get("/chats/new",(req,res)=>{
    res.render("form.ejs");
})


//create route
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newchat=new chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date(),
    });
    newchat.save()
        .then((res)=>{
            console.log("chat saved");
            
        })
        .catch((err)=>{
            console.log("error");
        })

    res.redirect("/chats");

   
});

app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let reqchat=await chat.findById(id)
   
    res.render("edit.ejs",{reqchat});
})


//update
app.put("/chats/:id",async(req,res)=>{
    
    let {id}=req.params;
    let {msg:newmsg}=req.body;
    let updated= await chat.findByIdAndUpdate(id,{msg:newmsg},{new:true});
    console.log(updated);
    res.redirect('/chats');

})


//destroy
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let c=await chat.findByIdAndDelete(id);
    
    res.redirect("/chats");

})


// let chat1=new chat({
//     from:"Srikanth",
//     to:"sri",
//     msg:"hi how r u?",
//     created_at:new Date()
// });


// chat1.save();


