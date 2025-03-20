const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Wrong email style!!!"],
  },
  createdAt: { type: Date, default: Date.now() },
});
const user = mongoose.model("users", userSchema);
module.exports = user;
