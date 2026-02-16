import mongoose from 'mongoose';
import 'dotenv/config';

function connectToDb() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to DB.");
        }).catch(e => {
            console.log("Database connection was unsuccessful.", e);
        });
}

export {connectToDb};