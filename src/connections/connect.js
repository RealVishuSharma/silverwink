const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/StudentManagement")
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Unable to connect to MongoDB!" + err)
    })
}

module.exports = connectDB;