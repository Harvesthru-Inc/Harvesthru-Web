const express = require("express");
const router = express.Router();

// Facebook Login Route
router.get("/", passport.authenticate("facebook"));

// Facebook Callback Route
router.get(
  "/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

module.exports = router;