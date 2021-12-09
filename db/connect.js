const mongoose = require("mongoose");

const connectionString = "mongodb+srv://adriel:Astralopteco442@cluster0.zkoqt.mongodb.net/TaskManager?retryWrites=true&w=majority";

const connectDB = (url) =>
{
        return mongoose.connect(url);    
}

module.exports = connectDB;