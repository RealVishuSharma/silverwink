const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    Name: {
        type: String,
        // required: [true, "Please Enter your name!"],
    },
    Dob: {
        type: String,
        // required: [true, "Please Enter your Date of Birth!"],
    },
    Contact: {
        type: Number,
        // required: [true, "Please Enter your Mobile Number!"],
        unique: true,
        minlength: 10,
        maxlength: 10,
        // validate: [validator.isNumeric, "Please provide a valid contact number"],
    },
    Student_id: {
        type : Number,
        // required: [true, "Please Enter your Student ID!"],
        unique: true,
    },
    Course: {
        type: String,
        // required: [true, "Please Enter your Course Name!"],
    }
})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;