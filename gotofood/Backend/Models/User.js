const mongoose = require("mongoose")
const { Schema } = mongoose;

const Userschema= new Schema({
    name:{
        type: String,
        required:true,
    },
    location:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },
    date:{
        type: Date,
        default:Date.now,
    },
})

const User = mongoose.model('User', Userschema)
module.exports= User

// USER NAAM KA EK COLLECTION BANGAYA USME SCHEMA USERSCHEMA H