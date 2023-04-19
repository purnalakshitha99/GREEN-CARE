const mongoose = require("mongoose");
const multer = require('multer');

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  export const upload= multer({ storage: storage });

const animalFormSchema  = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    age: { type: Number, required: true },
    weight: { type: Number, required: true },
    animalSpecies: { type: String, required: true },
    attachment: { type: String },
    message: { type: String },
});

const AnimalForm = mongoose.model("animalForms", animalFormSchema);

module.exports = AnimalForm;
