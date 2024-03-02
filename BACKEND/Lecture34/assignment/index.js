let express=require("express");
let app=express();
let path=require("path");
var methodOverride = require('method-override');

const { v4: uuidv4 } = require('uuid');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.listen(3000,()=>{
    console.log("server listneing to port 3000");
});


let posts=[
    {
        username:"srikanth",
        id:uuidv4(),
        image:"img1.JPG",
        content:"this is a lovely day"
        
    },
    {
        username:"sai",
        id:uuidv4(),
        image:"img2.jpg",
        content:"you and i"
        
    },
    {
        username:"sravan",
        id:uuidv4(),
        image:"img3.jpg",
        content:"brother forever"
        
    }
];


app.get("/home",(req,res)=>{
    res.render("home.ejs",{posts});

});

app.get("/home/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
});


app.patch("/home/:id",(req,res)=>{
    let {id}=req.params;
    let content=req.body.content;

    let post=posts.find((p)=>id===p.id);
    post.content=content;
    res.redirect("/home");
    

});

app.post("/home",(req,res)=>{
    console.log(req.body);
        let newpost={
        username:req.body.username,
        id:uuidv4(),
        image:req.body.image,
        content:req.body.content   
    }
    posts.unshift(newpost);
    res.redirect("/home");
});

app.get("/home/new",(req,res)=>{
    res.render("new.ejs");
});

app.delete("/home/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>(p.id!=id));
   res.redirect("/home");

});