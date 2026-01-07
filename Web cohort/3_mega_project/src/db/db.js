import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

async function db_connect()
{   try{
        await mongoose.connect(process.env.DB_URL);
    }
    catch(err)
    {
        console.log(err.message,"Database connection failed");
        process.exit(1);
    }
    
}
export default db_connect;