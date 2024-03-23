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
const listings=require("./routes/listing.js");
const Reviews=require("./routes/review.js");



app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.engine("ejs",ejsmate);
app.use(express.urlencoded({extended:true}));
app.use(express.json());

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





app.use("/listing",listings);

app.use("/listing/:id/reviews",Reviews);



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





