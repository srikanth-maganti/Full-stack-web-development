import mongoose ,{Schema}from "mongoose"
import { AvailableStatus,AvailableStatusEnum } from "../utils/constant";
const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    project:{
        type:Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    assignedTo:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        enum:AvailableStatusEnum,
        default:AvailableStatus.TODO,
        
    },
    attachments:{
           type:[
            {
                url:String,
                mime:String,
                size:Number,
            }
           ]
    }



},{timestamps:true})

export const Task=mongoose.model("Task",taskSchema);
