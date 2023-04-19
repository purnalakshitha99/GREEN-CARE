const AnimalForm = require("../Models/vet_form_model");

exports.formSubmit = async (req, res) => {
    try {
      const animal = new AnimalForm({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        age: parseInt(req.body.age),
        weight: parseFloat(req.body.weight),
        animalSpecies: req.body.animalSpecies,
        attachment: req.file ? req.file.filename : '',
        message: req.body.message,
      });
  
      await animal.save();
  
      res.json({ success: true });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        error: 'Server error',
      });
    }
  }
