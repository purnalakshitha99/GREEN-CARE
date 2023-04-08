const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "../config.env" });

//configure the database
const URL =
  process.env.DATABASE ||
  "mongodb+srv://greencarepurna:greenCARE@cluster01.ymmknev.mongodb.net/greencareDB?retryWrites=true&w=majority";

mongoose
  .connect(URL, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull!"));

module.exports = mongoose;
