import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
    const { test } = req.cookies;
    if (!test) {
        return res.status(400).json({
            message: "Unauthorized",
            status: false,
        })
        
    }
    try {
        const decoded = jwt.verify(test, process.env.SECRET);
        console.log(decoded);
        if (!decoded) {
            return res.status(400).json({
                message: "unauthorized access",
                success: true,
            })
            
        }
        req.user = decoded;
        next();

    }
    catch(err)
    {
        res.status(400).json({
            message:"Unauthorized access",
            success:false
        })
    }
    
}

export default isLoggedIn;
