// External Dependencies
const express = require('express');

// Internal Dependencies
const teacher = require("../models/teacherModel");

const app = express();

let getT = async(req, res) => {
    let data = await teacher.findById({});
    res.status(200).json(data);
}

let postT = async(req, res) => {
    let {name, contact, teaid} = req.body;
    let data = ({
        name, contact, teaid
    });
    teacher.insertMany([data])
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch((error) => {
        console.log("Exception in teacher post=> " + error.message);
    })
}

let patchT = (req, res) => {
    console.log(req.params.update_tea_id);
    let query = {
        teaid: req.params.update_tea_id
    }
    let data = {
        teaid: req.params.teaid
    }
    teacher.updateOne(query, data)
    .then((result) => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch((error) => {
        console.log("Error in Teacher patch:" + error.message);
    })
}

let deleteT = (req, res) => {
    let query = {
        contact: req.body.delete_contact
    }
    teacher.deleteOne(query)
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((error) => {
        console.log("Error in Teacher delete:" + error.message);
    })
}

module.exports = {getT, postT, patchT, deleteT};