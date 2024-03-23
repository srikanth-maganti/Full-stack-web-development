const express=require("express");
const router=express.Router({mergeParams:true});
const wrapasync=require("../utils/wrapasync.js");
const listing=require("../models/listing.js")
const ExpressError=require("../utils/ExpressError.js");
const {listingschema}=require("../schema.js");

let validateschema=(req,res,next)=>{
    
    let {error}=listingschema.validate(req.body);
    
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

//index route
router.get("/",wrapasync(async (req,res)=>{

    let allistings=await listing.find({});
   
    res.render("./listings/index.ejs",{allistings});

}));

//new lsiting
router.get("/new",(req,res)=>{
    res.render("./listings/new.ejs");
})

//creating new listing
router.post("/",validateschema,wrapasync(async (req,res,next)=>{
    // let {title,location,description,image,price,country}=req.body;
    
    
        // let result=listingschema.validate(req.body);
        // console.log(result);
        // if(result.error)
        // {
        //     throw new ExpressError(400,result.error);
        // }

        // if(!req.body.list)
        // {
        //     throw new ExpressError(400,"bad re quest");
        // }
        let ls=new listing(req.body.list);
        // if(!ls.title){
        //     throw new ExpressError(400,"bad re quest");
        // }
        await ls.save();
        res.redirect('/listing');

   
   
}))







//show route
router.get("/:id",wrapasync(async (req,res)=>{
    let {id}=req.params;
    let list=await listing.findById(id).populate("reviews");
    res.render("./listings/show.ejs",{list});


}))


router.get("/:id/edit",wrapasync(async (req,res)=>{
    
    let {id}=req.params;
    let list=await listing.findById(id);
    res.render("./listings/edit.ejs",{list});
}))

//updating
router.put("/:id",validateschema,wrapasync(async (req,res)=>{
    let {id}=req.params;
   await listing.findByIdAndUpdate(id,{...req.body.list});
    res.redirect(`/listing/${id}`);
    
}))



//deleting

router.delete("/:id",wrapasync(async(req,res)=>{
    let {id}=req.params;
    let delted=await listing.findByIdAndDelete(id);
    console.log(delted);
    res.redirect("/listing");
}))

module.exports=router;

