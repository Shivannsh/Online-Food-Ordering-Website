const Express =require("express")
const MongoDb= require("./db")
const route  = require("./Routes/Createuser")
const app= Express()

MongoDb()

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/api" , route)

app.listen(5000, ()=>{
    console.log("Server Running Semxy");
})