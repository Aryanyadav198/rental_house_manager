import mongoose from "mongoose";

mongoose
const connectMongoDB= async ()=>{
   try {
     const connectionInstance =await  mongoose.connect(process.env.DATA_BASE_URL);
     console.log("MongoDB connected successfully >>>>");

   } catch (error) {
    console.log("Error while DataBase connection", error.message); 
    throw error;
   }
}
export {connectMongoDB};