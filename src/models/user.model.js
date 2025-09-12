import { Room } from "./room.model";
const mongoose = required("mongoose");

const userSchema =new mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        contactNo:{
            type:Number,
            required:true
        },
        fathersNo:{
            type:Number,
            required:true
        },
        address:{
            type:mongoose.Schema.ObjectId,
            ref:"Location"
        },
        image:{
            type:[String],
            required:true
        },
        idImage:{
            type:[String],
            required:true
        },
        roomAllot:{
            type:mongoose.Schema.ObjectId,
            ref:"Room"
        },
        joiningDate:{
            type:Date,
            default: Date.now()
        }
    },
    {
        timestamps:true
    }
);
export const User = mongoose.model("User",userSchema);