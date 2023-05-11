const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const reportOfDamageField = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  d_arrival: {
    type: String,
    required: true,
  },
  d_departure: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  damagedetails: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
  },
});
const damageReport = model("damagereport", reportOfDamageField);
module.exports = damageReport;
