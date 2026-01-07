import mongoose from "mongoose"

const projectSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    description:{
        type:String,
        
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

export const Project=mongoose.model("Project",projectSchema);

