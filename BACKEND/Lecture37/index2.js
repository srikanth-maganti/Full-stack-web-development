let express=require("express");
let app=express();
let {faker}=require("@faker-js/faker");
let mysql=require("mysql2");
let path=require("path");
let methodoverride=require("method-override");
const { v4: uuidv4 } = require('uuid');

function randomuser(){
    return [
      faker.string.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
     
      faker.internet.password(),
    
     
    ];
  }


let connection=mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    database: 'insta',
    password:"srikanth@143"
});
let q="insert into user values ?";
// let data=[]
// for(let i=1;i<101;i++)
// {
//     let p=randomuser();
//     data.push(p);
// }

// connection.query(q,[data],(err,result)=>{
//     console.log("result");
// });


app.set("view engine","ejs");

app.use(methodoverride("_method"));

//for post requestss
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//for views folder and public folder
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));



app.listen(3000,()=>{
    console.log("server listening to port 3000");
    

});

app.get("/",(req,res)=>{
    let q="select count(id) from user";
    try
    {
        connection.query(q,(err,result)=>{
            if(err)
            {
                throw err;
            }
            let count=result[0]["count(id)"];
            res.render("home.ejs",{count});
        })
    }
    catch(err)
    {
        res.send("error occured in database");
    }
    
});


app.get("/user",(req,res)=>{
    let q="select *from user";
    try{
        connection.query(q,(err,result)=>{
            if(err)
            {
                throw err;
            }
            let users=result;
            res.render("show.ejs",{users});
        });

    }
    catch(err)
    {
        res.send("error occured in datbase");
    }
});


//edit user
app.get("/user/:id/edit",(req,res)=>{
    let q="select *from user where id=?";
    let {id}=req.params;
    try
    {
        connection.query(q,[id],(err,result)=>{
            if(err)
            {
                throw err;
            }
            let user=result[0];
            res.render("edit.ejs",{user});
        });
        
    }
    catch(err)
    {
        res.send("error ocured in database");
    }
});


//updating
app.patch("/user/:id",(req,res)=>{
    let q="select *from user where id=?";
    let {password:formpass,username:newusername}=req.body;
    let {id}=req.params;
    try
    {
        connection.query(q,[id],(err,result)=>{
            if(err)
            {
                throw err;
            }
            let user=result[0];
            if(formpass!=user.password)
            {
                res.send("incorrect password");

            }
            else{
                let qq=`update user set username='${newusername}' where id='${id}'`;
                
                    connection.query(qq,(err,result)=>{
                        if(err)
                        {
                            throw err;

                        }
                        res.redirect("/user");
                    });
                
               
            }
        });
        
    }
    catch(err)
    {
        res.send("error ocured in database");
    }
  

});




//delete route
app.get("/user/:id/delete",(req,res)=>
{
    let {id}=req.params;
    let q=`select *from user where id='${id}'`;
    try
    {
        connection.query(q,(err,result)=>{
            if(err)
            {
            throw err;
            }
            let user=result[0];
            res.render("delete.ejs",{user});
        });

    }
    catch(err)
    {
        res.send("errorn in database");
    }
});

//deleting
app.delete("/user/:id",(req,res)=>{
    
    let {id}=req.params;
    let {email:formemail,password:formpassword}=req.body;
    let q=`select *from user where id='${id}'`;
    try
    {
        connection.query(q,(err,result)=>{
            if(err)
            {
            throw err;
            }
            let user=result[0];
            if(formemail!=user.email || formpassword!=user.password)
            {
                res.send("incorrect email or password");
            }
            else
            {
                let qq=`delete from user where id='${id}'`;
                connection.query(qq,(err,result)=>
                {
                    if(err)
                    {
                        throw err;
                    }
                    res.redirect("/user");
                });
            }
            
        });

    }
    catch(err)
    {
        res.send("errorn in database");
    }
});

//add new user
app.get("/user/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/user",(req,res)=>{
    let {username,password,email}=req.body;
    let q="insert into user values(?,?,?,?)";
    try
    {
        connection.query(q,[uuidv4(),username,email,password],(err,result)=>{
            if(err)
            {
                throw err;
            }
            res.redirect("/user");
        });

    }
    catch(err)
    {
        res.send("error in database");
    }
})