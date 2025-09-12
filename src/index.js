import dotenv from "dotenv";
dotenv.config("./env");
import  {connectMongoDB} from "./db_connection/mongodb_connect.js";
import { app }  from "./app.js";

connectMongoDB()
    .then((cmd)=>{
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on :- ${process.env.PORT}`);
        })
    }).catch((error)=>{
        console.error("Server Started aborted. DB not connected...");
        process.exit(1);
    });

