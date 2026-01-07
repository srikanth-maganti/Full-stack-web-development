import { validationResult } from "express-validator";
import ApiError from "../utils/ApiError";
function validate(req,res,next)
{   const results=validationResult(req);
    if(results.isEmpty())
    {
        return next();
    }
    const extractedError = [];
    errors.array().map((err) =>
        extractedError.push({
        [err.path]: err.msg,
        }),
    );

    throw new ApiError(400,"Validation failed",results);
}
export default validate