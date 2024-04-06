const express=require("express");
const router=express.Router({mergeParams:true});
const wrapasync=require("../utils/wrapasync.js");
const listing=require("../models/listing.js")
const {validateschema}=require("../middleware.js");
const passport=require("passport");
const {isloggedin,isOwner}=require("../middleware.js");
const listingcontroller=require("../controllers/listing.js");


router.route("/")
    .get(wrapasync(listingcontroller.index))
    .post(isloggedin,validateschema,wrapasync(listingcontroller.createlisting))



//new listing
router.get("/new",isloggedin,listingcontroller.rendernewform);

router.route("/:id")
    .get(wrapasync(listingcontroller.showlisting))
    .put(isloggedin,isOwner,validateschema,wrapasync(listingcontroller.updatelisting))
    .delete(isloggedin,isOwner,wrapasync(listingcontroller.deletelisting))




router.get("/:id/edit",isloggedin,isOwner,wrapasync(listingcontroller.rendereditform));



module.exports=router;

