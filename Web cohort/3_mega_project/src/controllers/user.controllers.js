import {User} from "../models/user.models.js"
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js"
import crypto from "crypto"
import {sendmail,emailverificationcontent,forgotpasswordverificationcontent} from "../utils/email.js"
import ApiResponse from "../utils/ApiResponse.js";

const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,fullname,password}=req.body;

    //validation
    if(!fullname || !username || !email || !password)
    {
        throw new ApiError(400,"invalid data");
    }

    const existinguser=await User.findOne({email})
    if(existinguser)
    {
        throw new ApiError(400,"user Already exists");
    }
    //create user
    const user=await User.create({username,email,fullname,password});

    if(!user)
    {
        throw new ApiError(400,"Unable to create a User");
    }


    //email verification
    const token=crypto.randomBytes(32).toString('hex');
    user.emailVerificationToken=token;
    user.emailVerificationTokenExpiry=Date.now()+10*1000*60;
    const url=`${process.env.BASEURL}/${token}`;
    const content=emailverificationcontent(user.username,url);
    sendmail("Email Verification",user.email,content);

    await user.save();
    
    res.status(200).json(new ApiResponse(200,"Verification Mail sent successfully"));
})

const resendEmailVerification=asyncHandler(async(req,res)=>{
    const {email}=req.body;
    if(!email)
    {
        throw new ApiError(400,"invalid input data");
    }
    const user=await User.findOne({email});
    if(!user)
    {
        throw new ApiError(400,"User not found");
    }

    const token=crypto.randomBytes(32).toString("hex");
    user.emailVerificationToken=token;
    user.emailVerificationTokenExpiry=Date.now()+10*1000*60;
    
    const url=`${process.env.BASEURL}/${token}`;
    const content=emailverificationcontent(user.username,url);
    sendmail("Email verification",content);

    await user.save();
    res.status(200).json(new ApiResponse(200,"email verification sent successfully"));
    
    
})


const verifyUser=asyncHandler(async(req,res)=>{
    const {token}=req.params;
    if(!token)
    {
        throw new ApiError(400,"Invalid data");
    }

    const user=await User.findOne({emailVerificationToken:token,emailVerificationTokenExpiry:{$gt:Date.now()}});
    if(!user)
    {
        throw new ApiError(400,"user verification failed");
    }

    user.isVerified=true;
    user.emailVerificationToken=undefined;
    user.emailVerificationTokenExpiry=undefined;
    await user.save();
    res.status(200).json(new ApiResponse(200,"user verification successful",user));

    
})



const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password)
    {
        throw new ApiError(400,
        "Invalid data"
        )
    }

    const user=await User.findOne({email});
    if(!user)
    {
        throw new ApiError(400,"User not found");
    }

    if(!user.verifyPassword(password))
    {
        throw new ApiError(400,"Invalid password");
    }

    const token=user.generateAccessToken();
    if(!token)
    {
        throw new ApiError(400,"Login failed");
    }
    res.cookie("token", token, {
        httpOnly: true,              
        sameSite: "strict",          // Prevent CSRF
        maxAge: 3600000              // 1 hour in milliseconds
    });

    res.status(200).json(200,"Login successfull",{token,user})


})

const refreshAccessToken=asyncHandler(async(req,res)=>{
    const {email}=req.user;
    if(!email)
    {
        throw new ApiError(400,"Invalid data");
    }
    const user=await user.findOne({email});
    
    const token=user.generateAccessToken();
    if(!token)
    {
        throw new ApiError(400,"refresh access token failed");
    }
    res.cookie("token", token, {
        httpOnly: true,              
        sameSite: "strict",          
        maxAge: 3600000            
    });

    res.status(200).json(200,"Login successfull",{token,user})
})


const logoutUser=asyncHandler(async(req,res)=>{
    res.clearCookie("token");
    res.status(200).json(new ApiResponse(200,"Logout successfull"));
    
})

const forgotPassword=asyncHandler(async(req,res)=>{
    const {email}=req.body;
    if(!email)
    {
        throw new ApiError(400,"email not found");
    }
    const user=await User.findOne({email})
    if(!user)
    {
        throw new ApiError(400,"user not found");
    }

    const token=crypto.randomBytes(32).toString('hex');
    if(!token)
    {
        throw new ApiError(400,"unable to reset password");
    }
    user.forgotPasswordToken=token;
    user.forgotPasswordTokenExpiry=Date.now()+10*1000*60;
    const url=`${process.env.CLIENTURL}/${token}`;
     const content=forgotpasswordverificationcontent(user.username,url);
    sendmail("reset password",user.email,content);
    await user.save();
    res.status(200).json(new ApiResponse(200,"Reset password mail sent successfully"));

})


const resetForgotPassword=asyncHandler(async(req,res)=>{
    const {token,password}=req.body;
    if(!token || !password)
    {
        throw new ApiError(400,"Invalid data");
    }

    const user=await User.findOne({forgotPasswordToken:token, forgotPasswordTokenExpiry:{$gt:Date.now()}});
    if(!user)
    {
        throw new ApiError(400,"Unable to reset password");
    }
    user.forgotPasswordToken=undefined;
    user.forgotPasswordTokenExpiry=undefined;
    user.password=password;
    await user.save();
    res.status(200).json(new ApiResponse(200,"password reset Successfully"));
})

const getUser=asyncHandler(async(req,res)=>{
    
})

export {registerUser,resendEmailVerification,verifyUser,loginUser,logoutUser,refreshAccessToken,resetForgotPassword,forgotPassword,getUser}