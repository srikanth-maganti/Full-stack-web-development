import mongoose from 'mongoose'
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    verificationToken:{
        type:String,
        default:undefined,
    },
    resetVerificationToken:{
        type:String,
        default:undefined,
    },
    resetTokenExpiry:{
        type:Date,
        default:undefined,
    }
    ,isVerified:{
        type:Boolean,
        default:false,
    }
    

    
},{
    timestamps:true,
})

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});
const User=mongoose.model("User",userSchema);


export default User;