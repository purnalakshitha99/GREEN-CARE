const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  exp: {
    type: Date,
  },
  mfd: {
    type: Date,
  },
  category: {
    type: String,
  },
  quantity: {
    type: Number,
  },

  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //foriegn column
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
