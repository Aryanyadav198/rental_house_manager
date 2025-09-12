const mongoose = require("mongoose")
const { User } = require("./user.model")

const billSchema =new mongoose.Schema(
    {
        roomRent:{
            type:Number,
            required:true
        },
        electricityCharge:{
            type:Number,
            default:0
        },
        totalRent:{
            type:Number,
            default:0
        },
        receivedAmount:{
            type:Number,
            default:0
        },
        totalBalance:{
            type:Number,
            default:0
        },
        paymentType:{
            type:String,
            enum:["Cash","Online"]
        },
        userId:{
            type:mongoose.Schema.ObjectId,
            req:"User",
            required:true
        },
    },
    {
        timestamps:true
    }
);
export const Bill = mongoose.model("Bill", billSchema);