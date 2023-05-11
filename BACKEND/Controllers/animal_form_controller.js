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
      attachment: req.file ? req.file.filename : "",
      message: req.body.message,
      status: req.body.status,
      doctorMessage: req.body.status ? req.body.doctorMessage : "",
      referenceLinks: req.body.referenceLinks ? req.body.referenceLinks : "",
      doctorName: req.body.doctorName ? req.body.doctorName : "",
      doctorContact: req.body.doctorContact ? req.body.doctorContact : "",
      doctorEmail: req.body.doctorEmail ? req.body.doctorEmail : "",
      sendViaEmail: req.body.sendViaEmail ? req.body.sendViaEmail : false,
    });

    await animal.save();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

exports.getRequests = async (req, res) => {
  const category = req.params.category;
  let Forms;
  try {
    if (category === "Total") {
      Forms = await AnimalForm.find();
    } else {
      Forms = await AnimalForm.find({ status: category });
    }

    res.json({ success: true, data: Forms });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

exports.getRequestCount = async (req, res) => {
  const category = req.params.category;
  let count;
  try {
    if (category === "Total") {
      count = await AnimalForm.countDocuments();
    } else {
      count = await AnimalForm.countDocuments({ status: category });
    }
    res.json({ success: true, count });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

exports.doctorFormSubmit = async (req, res, next) => {
  try {
    const updatedAnimalForm = {
      status: req.body.status,
      doctorMessage: req.body.doctorMessage,
      referenceLinks: req.body.referenceLinks,
      doctorName: req.body.doctorName,
      doctorContact: req.body.doctorContact,
      doctorEmail: req.body.doctorEmail,
      sendViaEmail: req.body.sendViaEmail,
    };
    let updateAnimalForm = await AnimalForm.findByIdAndUpdate(
      req.params.id,
      updatedAnimalForm
    ).then((updatedDocument) => {
      console.log(updatedDocument);
      res.send(updatedDocument);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

exports.getRequestCount = async (req, res) => {
  const category = req.params.category;
  let count;
  try {
    if (category === "Total") {
      count = await AnimalForm.countDocuments();
    } else {
      count = await AnimalForm.countDocuments({ status: category });
    }
    res.json({ success: true, count });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

exports.doctorFormDelete = async (req, res, next) => {
  try {
    let deleteDoctorForm = await AnimalForm.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      date: {
        deleteDoctorForm,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
