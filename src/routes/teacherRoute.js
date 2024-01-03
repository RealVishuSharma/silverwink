// External Dependencies
const express = require("express");
const router = express.Router();

// Internal Dependencies
const teaControl = require("../controllers/teacherControl");

router.get("/", teaControl.getT);
router.post("/", teaControl.postT);
router.patch("/:update_teaid", teaControl.patchT);
router.delete("/:delete_contact", teaControl.deleteT);

module.exports = router;