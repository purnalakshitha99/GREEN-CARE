const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  category: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 }
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);