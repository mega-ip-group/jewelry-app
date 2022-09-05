const express = require("express");
const app = express();
const User = require("../Schema/User");
exports.addUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });
  const user = await User.findOne({ email: newUser.email });
  if (user !== null) {
    res.send({
      ok: false,
      message: "user with such user name already exists",
    });
  } else {
    await newUser.save().then(() => {
      console.log("user saved");
    });
    res.send({
      ok: true,
      message: "user hase been saved",
    });
  }
};
