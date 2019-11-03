const config = require("config");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const users = require("./routes/users");
const auth = require("./routes/auth");
const express = require("express");
const app = express();
const path = require("path");

// try to access the custom environment variables
if (!config.get("PrivateKey")) {
  console.error("FATAL ERROR: PrivateKey is not defined.");
  process.exit(1);
}

// connect using mongoose
const URL = `mongodb+srv://yiyuan:20000805@harvesthru-back-xwbyo.mongodb.net/test?retryWrites=true`;

mongoose
  .connect(URL, { dbName: "authentication" })
  .then(() => console.log("Now connected to MongoDB!"))
  .catch((err) => console.error("Something went wrong", err));

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));
// parse request body as json
app.use(express.json());
// using custom route
app.use("/api/users", users);
app.use("/api/auth", auth);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("listen on port 8000");
});
