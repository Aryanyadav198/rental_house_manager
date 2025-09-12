import { Room } from "../models/room.model.js";
import {asyncHandler} from "../utils/async_handler.js";
import {ApiError} from "../utils/api_error.js"
import {ApiResponse} from "../utils/api_response.js";

const createRoom = asyncHandler(async (req, res) => {
    const {
        roomNumber,
        whichFloor,
        kitchen,
        washRoom,
        roomRent,
        electricityIncluded,
        maxPeople,
        roomStatus
    } = req.body;

    // Validate required fields
    if (
        !roomNumber ||
        !kitchen ||
        !washRoom ||
        roomRent === undefined ||
        electricityIncluded === undefined ||
        !maxPeople ||
        !roomStatus
    ) {
        throw new ApiError(400, "All required fields must be provided");
    }

    // Handle uploaded photos
    const photos = req.files?.map(file => file.path) || [];

    const newRoom = await Room.create({
        roomNumber,
        whichFloor,
        kitchen,
        washRoom,
        roomRent,
        electricityIncluded,
        maxPeople,
        roomStatus,
        photos
    });

    res.status(201).json(
        new ApiResponse(
        201, 
        "Room created successfully", 
        newRoom
    ));
});
const getAllRoom = asyncHandler(async (req,res)=>{

    const allRooms = await Room.find();
    res.status(200).json(
        new ApiResponse(
            200,
            "All Rooms Data",
            allRooms
        )
    )

});

export  {createRoom,getAllRoom} ;