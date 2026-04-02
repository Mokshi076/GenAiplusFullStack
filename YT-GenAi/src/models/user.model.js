const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : [true, "username already taken"],
        required : true,
    },
    email : {
        type : String,
        unique : [true, "Email Address Already Exists"],
        required : true,
    },
    password : {
        type : String,
        required : true,
        // unique : 
    },
})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel