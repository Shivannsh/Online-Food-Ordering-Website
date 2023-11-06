const express = require("express");
const router = express.Router()

router.post("/Displaydata", async(req,res)=>{
    try {
        console.log(global.food_items);
        res.send([global.food_items,global.category_items])
    } catch (error) {
        console.log(error);
        res.send("Error")
    }
})























module.exports = router