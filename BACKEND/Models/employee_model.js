const mongoose = require("mongoose");

const employeeConsultFormSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  nic: { type: String, required: true },
  address: { type: String, required: true },
  position: { type: String, required: true },
  registrationId: { type: String, required: true },
  workingPlace: { type: String, required: true },
  cvAttachment: { type: String },
});

const EmpConsultForm = mongoose.model("empForms", employeeConsultFormSchema);

module.exports = EmpConsultForm;
