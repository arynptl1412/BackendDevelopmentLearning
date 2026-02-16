import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    email:{
        type:String,
        unique: [true, "User with this email already Exists"]
    },
    password: String
})

const userModel = mongoose.model("users", userSchema);

export {userModel};