const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  companyName: {
    type: String,
  },
  location: {
    type: String,
  },
  email: {
    type: String,
  },
  tel: {
    type: Number,
  },
  category: {
    type: String,
  },

  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //foriegn column
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
