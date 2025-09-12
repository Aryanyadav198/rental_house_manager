class ApiError extends Error{
    
    constructor(statusCode, message = "Server Error..",stack ="" ,  data = {}){
        super(message);
        this.statusCode = statusCode;
        this.success = false;
        this.message = message;
        this.data = data;
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export {ApiError}