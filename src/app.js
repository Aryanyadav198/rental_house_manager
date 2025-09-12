import express, { urlencoded } from "express";

const app = express();

// Middlewares 

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));


// Imports routers
import roomRouter from "./router/room.routers.js";

// routers middlewares

app.use("/api/v1/room", roomRouter);





// Global error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode  || 500;
    console.error("Caught by global error handler:\n", err.message);
    res.status(statusCode).json({
        success: false,
        message: `Oops! : ${err.message}`,
        data: {}
    });
});



export {app};