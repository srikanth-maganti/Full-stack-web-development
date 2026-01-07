
import mongoose from "mongoose"
import bcyrpt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema=new mongoose.Schema({
    avatar:{
        type:{
            url:String,
            localpath:String,
        },
        default:{
            url:"",
            localpath:"",
        }
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        index:true,
    },
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        
    },

    emailVerificationToken:{
        type:String,
        default:undefined,
    },
    emailVerificationTokenExpiry:{
        type:Date,
        default:undefined,
    },
    isVerified:{
        type:Boolean,
        default:false
    },

    forgotPasswordToken:{
        type:String,
        default:undefined,
    },

    forgotPasswordTokenExpiry:{
        type:String,
        default:undefined,
    },

    refreshToken:{
        type:String,
        default:undefined
    }
    


},{timestamps:true})

userSchema.pre("save",async function(next){
    if(this.isModified("password"))
    {
        this.password=await bcyrpt.hash(this.password,10);
    }
    next();
})

//methods for userSchemaaa
userSchema.methods.verifyPassword=async function(password)
{
    return await bcyrpt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=async function()
{
   const token=await  jwt.sign({userId:this._id,email:this.email},process.env.SECRET_KEY,{expiresIn:"1d"});
   return token;
}

userSchema.methods.generateRefreshToken=async function()
{
   const token=await jwt.sign({userId:this._id,email:this.email,username:this.username},process.env.SECRET_KEY,{expiresIn:"1d"});
   return token;
}
export const User=mongoose.model("User",userSchema);
