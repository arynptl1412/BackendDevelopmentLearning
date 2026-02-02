const mongoose = require("mongoose");


function connectToDb(){
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database is connected.");
        
    })
}

module.exports = connectToDb;