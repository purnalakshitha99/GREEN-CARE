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
        status:req.body.status
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


  exports.getRequests = async (req, res) => {
    const category = req.params.category;
    let Forms
    try {

      if(category === 'total'){
        Forms = await AnimalForm.find();
      }else{
        Forms = await AnimalForm.find({ status: category });
      }
      
      res.json({ success: true, data: Forms});
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        error: 'Server error',
      });
    }
  }

  exports.getRequestCount = async (req, res) => {
    const category = req.params.category;
    let count;
    try {
      if (category === 'total') {
        count = await AnimalForm.countDocuments();
      } else {
        count = await AnimalForm.countDocuments({ status: category });
      }
      res.json({ success: true, count });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        error: 'Server error',
      });
    }
  };
  