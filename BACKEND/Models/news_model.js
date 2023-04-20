const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
 },
  image: {
    type: String,
    required: true,
  },
  // user: {
  //   type: mongoose.Types.ObjectId, //news have one user
  //   ref: "User",
  //   required: true,
  // },


  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //foriegn column
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
