const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  topic: {
    type: String,
  },
  description: {
    type: String,
  },
  reply: {
    type: String,
  },
  date: {
    type: Date
  },
  approvel: {
    type: Boolean,
  },
  farmer_name: {
    type: String,
  },
  
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //foriegn column
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
