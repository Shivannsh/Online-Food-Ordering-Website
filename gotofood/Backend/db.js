// const mongoose =require("mongoose");

// const mongoURI="mongodb+srv://spammailshivansh9927:9FtZYpv53qLqJI30@cluster0.dkivmfl.mongodb.net/GoFOOD?retryWrites=true&w=majority"


// const MongoDb =()=>{
//     mongoose.connect(mongoURI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     },).then (async(res) => {
//         console.log("Database connected")
//         const fetched_data=  await mongoose.connection.db.collection("foodData2");
//         fetched_data.find({}).toArray(function(err,data){
//                 if (err) {console.log(err)}
//                 else {console.log(data)};
//         })
//       }).catch(error => {
//          console.log(error);
//        })};

// module.exports=MongoDb;


const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://spammailshivansh9927:9FtZYpv53qLqJI30@cluster0.dkivmfl.mongodb.net/GoFOOD?retryWrites=true&w=majority";

const MongoDb = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Database connected");

        const fetched_data = await mongoose.connection.db.collection("foodData2");
        const data = await fetched_data.find({}).toArray();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

module.exports = MongoDb;
