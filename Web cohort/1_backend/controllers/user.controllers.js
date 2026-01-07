import User from '../model/user.model.js'
import nodemailer from "nodemailer";
import crypto from "crypto"
import dotenv from "dotenv"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

dotenv.config();
export const userRegister = async (req, res) => {

    const { name, email, password } = req.body;
    //validation
    if (!name || !email || !password) {
        return res.send(400).json({
            message: "All details required"
        })
    }
    //check if user exist
    try {
        const existinguser = await User.findOne({ email });
        if (existinguser) {
            return res.status(400).json({
                message: "user already exists",
            })
        }


        const user = await User.create({ name, email, password });

        //create a verification token

        const token = crypto.randomBytes(32).toString('hex');//include token generator

        //save the token in database
        user.verificationToken = token;
        await user.save();

        //send token to user through email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false,
            // true for 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASS,
            },
        });

        //send a mail
        const info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Verification Email",
            text: `${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain‑text body
        });
       

        res.status(200).json({
            message: "User registered successfully",
            success: true,
        })

    }
    catch (err) {
        res.status(400).json({
            success:false,
            message: err.message,
        })
    }
}

export const userVerify = async (req, res) => {
    const { token } = req.params;
    if (!token) {
        return res.status(400).json({ message: "user not registered", success: false });
    }

    try {
        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            return res.status(400).json({
                message: "user not verified",
                success: false
            })
        }

        user.verificationToken = undefined;
        user.isVerified = true;
        user.save();

        res.status(200).json(
            {
                message: "user verified",
                success: true
            }
        )
    }
    catch (err) {
        res.status(400).json({
            message: "user not verified!",
            success: false
        })
    }
}

export const login = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({
            message: "Incorrect password or email",
            sucess: false,
        })

    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect password or email",
                success: false,
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect password or email",
                success: false,
            });
        }

        const options = { expiresIn: '24h' }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET, options);
        const cookieoptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 600 * 1000
        }
        res.cookie("test", token, cookieoptions);
        return res.status(200).json({
            message: "Login Successful",
            success: true,
            user: {
                id: user._id,
                name: user.name,
                role: user.role
            },
            token: token
        })


    }
    catch (err) {
        return res.status(400).json({
            message: "invalid user credentials",
            success: false,
        })
    }

}

export const getme = async (req, res) => {
    //get user details
    const { role, id } = req.user;
    if (!id || !role) {
        return res.status(400).json({
            message: "Unauthorized access",
            success: false,
        })
    }
    try {
        const user = await User.findById(id).select("-password");
        if (!user) {
            return res.status(400).json({
                message: "user not exists",
                role: false
            })
        }
        return res.status(200).json({
            name: user.name,
            email: user.email,
            message: "User details fetched successfully",
            success: true,

        })
    }
    catch (err) {
        return res.status(400).json({
            message: "User Not exist",
            success: false
        })
    }





}

export const forgotpassword = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Invalid email", success: false });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email", success: false });
        }
        //create a token
        const token = crypto.randomBytes(32).toString('hex');
        user.resetVerificationToken = token;
        user.resetTokenExpiry = Date.now() + (1000*60*10);
        await user.save()

        //create mail
        //send token to user through email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false,
            // true for 465, false for other ports
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASS,
            },
        });

        //send a mail
        const info = await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Verification Email",
            text: `${process.env.BASE_URL}/api/v1/users/resetpassword/${token}`, // plain‑text body
        });
        console.log(info);

        res.status(200).json({
            message: "Verification token sent ",
            success: true,
        })


    }
    catch (err) {
        res.status(400).json({
            message:"Unknown error",
            success:true
        })

    }
}

export const resetpassword=async (req,res)=>{
    const {token}=req.params;
    const {password}=req.body;
    if(!token)
    {
        return res.status(400).json({
            message:"Invalid token",
            success:false
        })
    }

    try{
        const user=await User.findOne(
            {
                resetVerificationToken:token ,
                resetTokenExpiry:{$gt:Date.now()}
            });
        if(!user)
        {
            return res.status(400).json({message:"User not Found",success:false});
        }

        user.resetTokenExpiry=undefined;
        user.resetVerificationToken=undefined;
        user.password=password;
        await user.save();

        return res.status(200).json({message:"Password changed successfully",success:true});

    }
    catch(err)
    {
        return res.status(400).json({message:"Unable to change password",success:false});
    }
}