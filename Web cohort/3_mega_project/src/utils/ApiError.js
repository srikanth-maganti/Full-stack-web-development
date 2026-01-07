class ApiError extends Error{
    constructor(statusCode,message="something went wrong",errors=[],stack="")
    {
        super(message);
        this.statusCode=statusCode;
        this.message=message;
        this.errors=errors;
        this.success=false;
        if(stack)
        {
            this.stack=stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);//this-- target  //this.constructor --where to start tracing
        }
    }
}

export default ApiError