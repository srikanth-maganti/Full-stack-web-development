import express from 'express'
import {registerUser,resendEmailVerification,verifyUser,loginUser,refreshAccessToken,logoutUser,forgotPassword,resetForgotPassword,getUser} from "../controllers/user.controllers.js"
const router=express.Router();
import validationData from "../validators/validator.js"
import validate from "../middlewares/validator.middleware.js"
import { upload } from '../middlewares/multer.middleware.js';



router.post("/register",validationData(),validate,upload.single("avatar"),registerUser)
router.post("/resendemailverification",resendEmailVerification);
router.get("/verify/:token",verifyUser);
router.post("/login",loginUser);
router.get("/refreshaccesstoken",refreshAccessToken);
router.get("/logout",logoutUser)
router.post("/forgotpassword",forgotPassword)
router.post("/resetforgotpassword",resetForgotPassword);
router.get("/getme",getUser)

export default router;