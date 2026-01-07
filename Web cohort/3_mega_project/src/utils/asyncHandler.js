
function asyncHandler(fn)
{
    return function fun(req,res,next)
    {
        Promise.resolve(fn(req,res,next)).catch((err)=>{
            next(err);
        })
    }
}

export default asyncHandler