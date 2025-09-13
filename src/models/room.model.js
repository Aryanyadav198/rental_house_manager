import mongoose, { Schema } from "mongoose";
const roomSchema = new mongoose.Schema({
    ownerId: {
        // type : mongoose.Schema.ObjectId,
        // ref:"User"
        type:String
    },
    roomNumber: {
        type: Number,
        required: true
    },
    whichFloor: {
        type: String,
        default: "Ground Floor"
    },
    kitchen: {
        type: String,
        enum: ["InRoom", "Separate", "Shared"],
        required: true
    },
    washRoom: {
        type: String,
        enum: ["Separate", "Shared"],
        default: "Shared"
    },
    roomRent: {
        type: Number,
        default: 0
    },
    electricityIncluded: {
        type: Boolean,
        default: false
    },
    maxPeople: {
        type: Number,
        default: 2
    },
    roomStatus: {
        type: String,
        enum: ["Available", "Booked"],
        default: "Available"
    },
    photos: {
        type: [String]
    }
}, {
    timestamps: true
});

export const Room = mongoose.model("Room", roomSchema);