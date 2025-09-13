import mongoose ,{Schema} from "mongoose";

const adminSchema = Schema({

    name:{
        type:String,
        required: true,
    },
    dob:{
        type:Date  //"1995-09-13" ====> new Date("1995-09-13");
    },
    contactNo: {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return /^\d{10,}$/.test(v); // Only digits, minimum 10
          },
          message: props => `${props.value} is not a valid contact number!`
        },
        trim: true
    },
    location:{
        type: String,
        required:true
    },
    houseNo:{
        type: String,
        default:true
    }
});
