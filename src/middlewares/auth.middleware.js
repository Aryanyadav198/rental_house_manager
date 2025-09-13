import jwt from "jsonwebtoken";
import { ApiErrors } from "../utils/api_errors.js";
import { asyncHandler } from "../utils/async_handler.js";
import { Admin } from "../models/admin.model.js";

const verifyJwt = asyncHandler(async (req, res, next) => {

    try {
        const token = req.cookie?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new ApiErrors(401, "UnAuthorized request :-token require");
        }

        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const admin = await Admin.findById(decodeToken?._id).select("-password");

        if (!admin) {
            throw new ApiErrors(401, "Invalid Access Token ");
        }
        req.admin = admin;
        next()
    } catch (error) {
        throw new ApiErrors(401, error?.message || "Invalid Access Token ")

    }

});
export { verifyJwt };

