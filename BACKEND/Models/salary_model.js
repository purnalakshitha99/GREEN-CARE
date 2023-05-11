const mongoose = require("mongoose");

const salarySchema = new mongoose.Schema({

  employee_id: {
    type: String,
  },
  month: {
    type: String,
  },
  days_worked: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  firstName :{
    type : String
  }, 
  lastName :{
    type : String
  },
  position : {
    type : String
  },
  NIC :{
    type : String
  }

 
});

const Salary = mongoose.model("Salary", salarySchema);

module.exports = Salary;

