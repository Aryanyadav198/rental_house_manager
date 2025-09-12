class ApiResponse{
    constructor(statusCode, message = "Data Transfer Successfully", data={}){
        this.success = statusCode < 400;
        this.message  = message;
        this.data = data;
    }
}
export {ApiResponse};