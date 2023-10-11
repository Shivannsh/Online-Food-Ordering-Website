const express= require("express");
const router= express.Router()

const User = require("../Models/User")
const {body, validationResult} = require("express-validator");


router.post("/createuser",

body('name').isLength({min:3}),                     //
body('location').isLength({min:3}),                 //  VALIDATION
body('email').isEmail(),                            //  MIDDLEWARE
body('password',"Incorect PAssword").isLength({min:5}),     // This is a middleware, this will check the data before sending it to the database

async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        await User.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: req.body.password,
        })
    res.json({success:true})
    } catch (error) {
        console.log(error);
        res.json({success:false})
    }
})

module.exports= router