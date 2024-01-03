const mongoose = require('mongoose');
const validator = require('validator');

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, "Please enter your name!"]
    },
    contact: {
        type: Number,
        required : [true, "Please enter your contact number!"]
    },
    teaid: {
        type: Number,
        required : [true, "Please enter your ID number!"]
    }
})

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;