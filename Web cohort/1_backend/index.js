import express, { urlencoded } from 'express'
import dotenv from 'dotenv'
import db from "./utils/db.js"
import userRouter from './routes/user.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config();

const PORT=process.env.PORT || 8000;

const app=express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true,
    methods:["GET","POST","PATCH","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}))




app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())
db();
app.get("/",(req,res)=>{
    res.send("hello");
})
app.use("/api/v1/users",userRouter);


app.listen(PORT ,()=>{
    console.log("app listening to port no",PORT);
})