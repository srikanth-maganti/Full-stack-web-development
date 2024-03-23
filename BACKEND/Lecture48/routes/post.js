const express=require("express");
const router=express.Router();

//posts
router.get("/",(req,res)=>{
    res.send("get posts");
})
router.post("/new",(req,res)=>{
    res.send("post posts");
})

router.delete("/:id",(req,res)=>{
    res.send("deltete posts");
})
module.exports=router;
