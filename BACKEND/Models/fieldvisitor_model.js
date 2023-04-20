const mongoose = require("mongoose");
const {Schema, model} = mongoose;
const farmerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
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
  Areaoffield: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
  },

});
const FarmModel = model("Farmer", farmerSchema);
module.exports = FarmModel;