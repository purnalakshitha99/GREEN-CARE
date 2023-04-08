const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },

  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //foriegn column
});

const Notice = mongoose.model("Notice", noticeSchema);

module.exports = Notice;
