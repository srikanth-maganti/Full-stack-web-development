import mongoose from "mongoose"
import {Schema} from "mongoose"
import { AvailableRolesEnum ,AvailableRoles} from "../utils/constant";
const memberSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    project:{
        type:Schema.Types.ObjectId,
        ref:true,
        required:true,
    },
    role:{
        type:String,
        enum:AvailableRolesEnum,
        default:AvailableRoles.MEMBER,
    }
},{timestamps:true})

export const ProjectMember=mongoose.model("ProjectMember",memberSchema);
