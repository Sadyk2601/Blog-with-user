const User = require("../modules/user_module");

let findUsers = async (req, res, next) => {
  let users = await User.find();
  res.status(200).json({ name: "Users", users });
};
let findUserById = async (req, res, next) => {
  let id = req.params.id;
  let user = await User.findById(id);
  if (user) {
    res.status(200).json({ name: "User", user });
  } else {
    res.status(404).json({ "User error": "User not found!!!" });
  }
};

let addUser = async (req, res, next) => {
  let data = req.body;
  let user = await User.create({ ...data });
  await user.save();
  res.status(200).json({ name: "User", user });
};

let deleteUser = async (req, res, next) => {
  let id = req.params.id;
  await User.findByIdAndDelete(id);
  res.status(204).json({ name: "user" });
};

module.exports = { findUsers, findUserById, addUser, deleteUser };
