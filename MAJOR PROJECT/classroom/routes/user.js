const express=require("express");
const router=express.Router();


//users
router.get("/",(req,res)=>{
    res.send("get users");
})

router.post("/new",(req,res)=>{
    res.send("post userss");
})

router.delete("/:id",(req,res)=>{
    res.send("deltete");
})

module.exports=router;