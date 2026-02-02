const app = require("./src/app");

const mongoose = require('mongoose');

function connectToDb() {
    // Database Link add karna hota h idhar
    mongoose.connect("");  
        .then(() => {
            console.log("Database is connected");
        })
}

connectToDb();

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000.");
})