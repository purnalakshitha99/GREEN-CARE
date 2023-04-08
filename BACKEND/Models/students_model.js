const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  address: {
    type: String,
  },

  grade: {
    type: String,
  },
});

const Studnet = mongoose.model("Student", studentSchema);

module.exports = Studnet;
