import mongoose from "mongoose";
import  {Schema} from 'mongoose';


const userSchema =  new Schema ({
    name: {
        type: String,
        required: true,
        trim: true


    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
        minlength: 4,

    },
    address: {
        type: String,
        required: true,

    }
})


const User = mongoose.model('User', userSchema);
export default User;