const Joi = require("joi");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User } = require("../models/user");
const passport = require("passport-facebook");
const FacebookStrategy = require('passport-oauth').OAuth2Strategy;
const express = require("express");
const router = express.Router();
const config = require("config");

passport.use(
  new FacebookStrategy(
    {
      authorizationURL: config.get("FACEBOOK_AUTH_URL"),
      clientID: config.get("FACEBOOK_APP_ID"),
      clientSecret: config.get("FACEBOOK_APP_SECRET"),
      callbackURL: config.get("FACEBOOK_CALLBACK_URL")
    },
    function(accessToken, refreshToken, profile, cb) {}
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
  const token = jwt.sign({ _id: user._id }, config.get("PRIVATE_KEY")); // PRIVATE_KEY in config/default.json
  res.header("x-auth-token", token).send({
    _id: user._id,
    name: user.name,
    email: user.email
  });
});

// Facebook Login Route
router.get("/facebook", passport.authenticate("facebook"));

// Facebook Callback Route
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

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
