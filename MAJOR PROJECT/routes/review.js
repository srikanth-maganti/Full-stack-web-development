
const express=require("express");
const router=express.Router({mergeParams:true});
const wrapasync=require("../utils/wrapasync.js")
const ExpressError=require("../utils/ExpressError.js");
const {reviewsschema}=require("../schema2.js");
const reviews=require("../models/review.js");
const listing=require("../models/listing.js")





let validatereview=(req,res,next)=>{
    let {error}=reviewsschema.validate(req.body);
    if(error)
    {

        let errs=error.details.map((er)=>er.message).join(",");
        throw new ExpressError(400,errs);
    }
    else
    {
        next();
    }
}
//creating revieews
router.post("/",validatereview,wrapasync(async(req,res)=>{
    let list=await listing.findById(req.params.id);
    let review1=new reviews(req.body.review);
    list.reviews.push(review1);

    await review1.save();
    await list.save();
   res.redirect(`/listing/${list._id}`)
}))

router.delete("/:reviewid",wrapasync(async (req,res)=>{
    console.log("haha");
    let {id,reviewid}=req.params;
    await listing.findByIdAndUpdate(id,{$pull:{reviews:reviewid}});
    await reviews.findByIdAndDelete(reviewid);
    res.redirect(`/listing/${id}`);
}))

module.exports=router;

