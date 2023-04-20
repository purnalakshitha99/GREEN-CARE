const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({
  employee_type: {
    type: String,
  },
  id: {
    type: String,
  },
  month: {
    type: String,
  },
  days: {
    type: Number,
  },
  amount: {
    type: Number,
  },


  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //foriegn column
});

const Salary = mongoose.model("Salary", salarySchema);

module.exports = Salary;

