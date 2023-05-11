const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  empNum: {
    type: String,
  },
  password: {
    type: String,
  },

  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //foriegn column
});

const Manager = mongoose.model("Manager", managerSchema);

module.exports = Manager;
