const mongoose = require("mongoose")
const { User } = require("./user.model")
const { Bill } = require("./bill.model")

const paymentHistorySchema =new mongoose.Schema(
    {
        userId:
        {
            type:mongoose.Schema.ObjectId,
            req:"User"
        },
        bill:{
            type:mongoose.Schema.ObjectId,
            ref:"Bill"
        },
        status:{
            type:String,
            enum:["Paid","Unpaid"]
        }
    },{
        timestamps:true
    }
);
export const PaymentHistory = mongoose.model("PaymentHistory", paymentHistorySchema);