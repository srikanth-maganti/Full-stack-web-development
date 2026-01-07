import prisma from "../utils/prisma.js"

export const userRegister=async(req,res)=>{
    console.log("hello");
    const user=await prisma.user.create({data:{id:123,email:"magantisrikanth@gmail.com",password:"1432",name:"srikanth"}});
    console.log(user);
    res.send("hello");
}

