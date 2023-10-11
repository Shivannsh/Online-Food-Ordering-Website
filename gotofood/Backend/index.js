const Express = require("express");
const MongoDb = require("./db");
const router = require("./Routes/Createuser");
const cors = require("cors"); // Import the cors middleware.
const app = Express();

MongoDb();

// Add the CORS middleware before your routes.
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use(Express.json());
app.use("/api", router);

app.listen(5000, () => {
    console.log("Server Running Semxy on 5000");
});
