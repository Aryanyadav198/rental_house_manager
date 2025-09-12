
// Async Handler
const asyncHandler  = (fun) =>(req, res, next)=>{
    Promise.resolve(fun(req,res,next)).catch((error)=>next(error));
}
export {asyncHandler};