// Install Necessary Dependencies
require("dotenv").config();
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  // First Validate The Request
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if this user already exisits
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("User already exists in database");
  } else {
    // Insert the new user if they do not exist yet
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    // generate a salt(seed) and use that to hash the user password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.privateKey); //jwt encrypts {_id: user._id} using PrivateKey
    res
      .header("x-auth-token", token)
      .send({ _id: user._id, name: user.name, email: user.email });
  }
});

module.exports = router;
