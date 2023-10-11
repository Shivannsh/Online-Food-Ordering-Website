const Express =require("express")
const MongoDb= require("./db")
const router  = require("./Routes/Createuser")
const app= Express()

MongoDb()

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.use(Express.json())
app.use("/api" , router)

app.listen(5000, ()=>{
    console.log("Server Running Semxy");
})