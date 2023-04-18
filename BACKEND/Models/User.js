import mongoose from "mongoose"; //consultant

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  news: [{ type: mongoose.Types.ObjectId, ref: "News", required: true }], //user can have multiple blogs
});
export default mongoose.model("User", userSchema);
// users