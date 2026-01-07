import express from "express"
import dotenv from "dotenv"
import router from "./routes/user.route.js"
dotenv.config();

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.send("hell");
})
app.use("/api/v2/users",router);
app.listen(process.env.PORT,(req,res)=>{
    console.log("app listening to port no",process.env.PORT);
})