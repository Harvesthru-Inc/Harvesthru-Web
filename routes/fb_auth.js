const express = require("express");
const router = express.Router();

// Facebook Login Route
router.get("/auth/facebook", passport.authenticate("facebook"));

// Facebook Callback Route
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
