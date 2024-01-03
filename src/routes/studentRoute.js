// External Dependencies
const express = require("express");
const router = express.Router();

// Internal Dependencies
const stuControl = require("../controllers/studentcontrol");


router.get("/", stuControl.getS);
router.post("/", stuControl.postS);
router.patch("/:update_stuid", stuControl.patchS);
router.delete("/:delete_stuid", stuControl.deleteS);

module.exports = router;