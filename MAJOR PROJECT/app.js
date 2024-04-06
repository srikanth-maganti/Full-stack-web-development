const express=require("express");
const mongoose=require("mongoose");
const app=express();
// const listing=require("./models/listing.js")
const path=require("path");
const methodoverride=require("method-override");
const ejsmate=require("ejs-mate");
// const wrapasync=require("./utils/wrapasync.js")
const ExpressError=require("./utils/ExpressError.js");
// const {listingschema,reviewsschema}=require("./schema.js");

// const reviews=require("./models/review.js");
const listingsRouter=require("./routes/listing.js");
const ReviewsRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");


const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");




app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsmate);
app.use(express.urlencoded({extended:true}));
app.use(express.json());

let sessionoptions={
    secret:"mysecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
};
app.use(session(sessionoptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//connection
main()
    .then((res)=>{
        console.log("connected to db");
    })
    .catch((err)=>{
        console.log("error in database");
    })
async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}



//server
app.listen(3000,()=>{
    console.log("server started listening to port 8080");
});

app.get("/",(req,res)=>{
    res.send("hi working");
});


app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.curruser=req.user;
    next()
;})


app.use("/listing",listingsRouter);

app.use("/listing/:id/reviews",ReviewsRouter);
app.use("/",userRouter);


// app.get("/demo",async(req,res)=>{
//  let fakeuser=new User({
//     email:"magantisrikanth45@gmail.com",
//     username:"maganti",
// });

//  let newuser=await User.register(fakeuser,"hellomama");
//  res.send(newuser);

// })

app.all("*",(req,res)=>{
    throw new ExpressError(404,"page not found");
})


app.use((err,req,res,next)=>{
    let {status=500,message="somethig went wrong"}=err;

    // res.status(status).send(message);
    res.status(status).render("error.ejs",{message});
})







// app.get("/testdb",(req,res)=>{
//     let listing1=new listing({
//         title:"villa",
//         location:"goa",
//         country:"india",
//         price:2400,
//         description:"wonnderful place",
//     })
//     listing1.save().then((res)=>{
//         console.log("saved");
//     })
//     .catch((err)=>{
//         console.log("error");
//     });

//     res.send("succes");
// })





