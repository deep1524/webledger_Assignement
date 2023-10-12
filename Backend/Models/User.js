const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    // id:{type:Number}
})

const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel