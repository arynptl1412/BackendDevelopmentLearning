const mongoose = require("mongoose");
require("dotenv").config();

function connectToDb() {
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Connected To Database.");
        })
        .catch((err)=>{
            console.log("Database connection was unsuccessful", err);
            
        })
}

module.exports = connectToDb;