const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const reportOfField = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  depature: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  problem: {
    type: String,
    required: true,
  },
  solution: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
  },
});
const FieldReport = model("report", reportOfField);
module.exports = FieldReport;
