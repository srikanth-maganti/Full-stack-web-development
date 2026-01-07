import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();
const db=async()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("connected to db");
    })
    .catch((err)=>{
        console.log("error while conneting to db");
    })
    
}
export default db;