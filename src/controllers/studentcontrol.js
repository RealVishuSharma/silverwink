// External Dependencies
const express = require('express');

// Internal Dependencies
const student = require("../models/studentModel");

const app = express();

let getS = async(req, res) => {
    let data = await student.find({});
    res.status(200).json(data);
};

let postS = async(req, res) => {
    let {name, dob, contact, stuid, course} = req.body;
    let data = ({
          Name: name,
          Dob: dob,
          Contact:contact,
          Student_id: stuid,
          Course:course,
    });
    student.insertMany([data])
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch((error) => {
        
        console.log("EXCEPTION =>  in POST: " + error.message);
    })
};

let patchS = (req, res) => {
    console.log(req.params.update_stuid);
    let query = {
        stuid: req.params.update_stuid
    }
    let data = {$set: {
        name: req.body.stuid,
    }}
    student.updateOne(query, data)
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch((error) => {
        console.log(error);
    })
}

let deleteS = (req, res) => {
    let query = {
        stuid: req.params.delete_stuid
    }
    student.deleteOne(query)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        console.log(error);
    })

}


module.exports = {getS, postS, patchS, deleteS};