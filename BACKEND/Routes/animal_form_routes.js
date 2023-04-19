const express = require("express");
const animal_form_controller = require("../Controllers/animal_form_controller");
const { upload } = require("../Models/vet_form_model");

const router = express.Router();

router.post("/animalFormSubmit",animal_form_controller.formSubmit);


module.exports = router;
