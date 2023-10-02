const express= require("express");
const router= express.Router()

const User = require("../Models/User")

router.post("/createuser", async(req,res)=>{
    try {
        await User.create({
            name:"Shivansh",
            location:"Muzaffarnagar",
            email:"shivansh@gmail.com",
            password:"1233456"
        })
    res.json({success:true})
    } catch (error) {
        console.log(error);
        res.json({success:false})
    }
})

module.exports= router