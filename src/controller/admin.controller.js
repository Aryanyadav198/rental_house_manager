import { asyncHandler } from "../utils/async_handler.js";
import { ApiError } from "../utils/api_error.js";

import { ApiResponse } from "../utils/api_response.js";
import { Admin } from "../models/admin.model.js";

const registerAdmin = asyncHandler(async (req , res )=>{
    const {
        name,
        dob,
        contactNo,
        email,
        password,
        location,
        houseNo
    } = req.body;
  

    try {
        if (
            [name, contactNo, email, password, location, houseNo].some(
            value => typeof value !== "string" || !value.trim()
            ) || !dob
        ) {
            throw new ApiError(400, "All fields are required");
        }
    } catch (error) {
        throw new ApiError(400, "All fields are required");        
    }
    const isDuplicate = await Admin.findOne({
        $or: [{ email: email }]
    });
    if (isDuplicate) {
        if (isDuplicate.email === email) {
            throw new ApiError(409, "Email is already registered");
        }
    }
    try{
        const admin = await Admin.create({
            name,
            dob: new Date(dob),
            contactNo,
            email,
            password, 
            location,
            houseNo
        });
        if(!admin){
            throw new ApiError(500, "Account not created problem from server side ");
        }
        const token = admin.generateToken();
        return res.status(201).json(
            new ApiResponse(201,"Account created successfully",{
                admin,
                token
            })
        )
    }catch(err){
        throw new ApiError(400, `Not able to create Account ${err.message}`);
    }  
});







export {registerAdmin}