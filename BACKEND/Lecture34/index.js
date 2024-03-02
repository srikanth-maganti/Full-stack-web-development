let express=require("express");
let app=express();
let path=require("path");
const { v4: uuidv4 } = require('uuid');
const methodoverride=require("method-override");

app.use(methodoverride("_method"));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


let posts=[
    {   id:uuidv4(),
        username:"Srikanth",
        content:"knowledge is power"
    },
    {   id:uuidv4(),
        username:"sravan",
        content:"power in the money"
    },
    {   id:uuidv4(),
        username:"sai",
        content:"power is power"
    }
];


app.get("/posts",(req,res)=>{
   res.render("index.ejs",{posts});
});

app.get('/posts/new',(req,res)=>{
    res.render("new.ejs");
});

app.get('/posts/:id',(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    console.log(req.body);
    let newcontent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newcontent;
    res.redirect("/posts");
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
posts=posts.filter((p)=>id!=p.id);
    res.redirect("/posts")
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);

    res.render("edit.ejs",post);
})

app.post("/posts",(req,res)=>{
    let id=uuidv4();
    let {username,content}=req.body;
   posts.unshift({id,username,content});
    res.redirect("/posts");
   
});
app.listen(3000,()=>{
    console.log("server started listening to 3000");
});
