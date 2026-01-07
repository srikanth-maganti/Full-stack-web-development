import express from 'express'
import { userRegister ,userVerify,login,getme,forgotpassword,resetpassword} from '../controllers/user.controllers.js';
import isLoggedIn from '../middleware/auth.middleware.js';
const router=express.Router();

router.post("/register",userRegister);
router.get("/verify/:token",userVerify);
router.post("/login",login);
router.get('/getme',isLoggedIn,getme);
router.post('/forgotpassword',forgotpassword)
router.post('/resetpassword/:token',resetpassword)

export default router;