const express = require("express");
const router = express.Router()
const User = require("../Models/User")
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const saltrounds=10;
const jwt = require("jsonwebtoken");

router.post("/createuser",

    body('name').isLength({ min: 3 }),                     //
    body('location').isLength({ min: 3 }),                 //  VALIDATION
    body('email').isEmail(),                            //  MIDDLEWARE
    body('password', "Incorect PAssword").isLength({ min: 5 }),     // This is a middleware, this will check the data before sending it to the database

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const hash= await bcrypt.hash(req.body.password,saltrounds);

        try {
            await User.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: hash,
            })
            res.json({ success: true })
        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    })


router.post("/login",
    [body('email').isEmail(),
    body("password", "Incorect PAssword").isLength({ min: 5 })],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });}
        try {
            const userData = await User.findOne({ email: req.body.email })
            if (!userData) {
                return res.status(400).json({ errors: [{ msg: "User not found" }] })
            }
            const isMatch = await bcrypt.compare(req.body.password, userData.password);
            if (!isMatch) {
                return res.status(400).json({ errors: [{ msg: "Password Incorrect" }] })
            }

            const payload = {
                user: {
                    id: userData.id
                }
            }
            const Authtoken= jwt.sign(payload,"12345678912345678123456781234567812345678")

            res.json({ success: true ,Authtoken:Authtoken})
        } catch (error) {
            console.log(error);
            res.json({ success: false })
        }
    })

module.exports = router