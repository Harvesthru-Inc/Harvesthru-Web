require("dotenv").config();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User } = require("../models/user");
const passport = require("passport");
const FacebookTokenStrategy = require("passport-facebook-token");
const express = require("express");
const router = express.Router();

// Use FB auth strategy
passport.use(
  "facebookToken",
  new FacebookTokenStrategy(
    {
      clientID: process.env.clientID,
      clientSecret: process.env.clientSecret
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken, profile, done);
    }
  )
);

// Custom Authentication Route
router.post("/", async (req, res) => {
  // First Validate The HTTP Request
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //  Now find the user by their email address
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).send("Incorrect email or password.");
  }

  // Then validate the Credentials in MongoDB match those provided in the request
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Incorrect email or password.");
  }
  const token = jwt.sign({ _id: user._id }, process.env.privateKey); // PrivateKey in config/default.json
  res.header("x-auth-token", token).send({
    _id: user._id,
    name: user.name,
    email: user.email
  });
});

// Facebook Login Route
router.post("/facebook", passport.authenticate("facebook", { session: false }));

// validate if the user email and password are valid inputs
const validate = req => {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(req, schema);
};

module.exports = router;
