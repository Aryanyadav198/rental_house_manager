import  jwt  from "jsonwebtoken"  ;
import mongoose ,{Schema} from "mongoose";
import bcrypt from "bcryptjs";

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
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique:true,
        index: true,
        validate: {
          validator: function (v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
          },
          message: props => `${props.value} is not a valid email address!`
        },
        
    },
    password:{
        type:String,
        required:true,
        minLength: [6 , "Password must be 6 character"]
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
adminSchema.methods.generateToken = function(){
    const payload = {
        id : this._id,
        name : this.name,
        contactNo : this.contactNo
    }
    const secret = process.env.JWT_SECRET || "whothehellwasthat"
    const options = {expiresIn : "1d"};
    return jwt.sign(payload,secret,options);
}
adminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
  
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  });

export const Admin = mongoose.model("Admin",adminSchema);
