// Neccessary dependencies
require("dotenv").config();
const mongoose = require("mongoose");
const user = require("./routes/user");
const auth = require("./routes/auth");
const express = require("express");
const app = express();
const path = require("path");
const https = require("https");
const fs = require('fs')

// Sanity check for env processing
if (!process.env.URL || !process.env.PRIVATE_KEY) {
  console.error(
    "FATAL ERROR: No environment variables are defined, please ask server admin for custom variables"
  );
  process.exit(1);
}

// Mongo Atlas custom URL to mongoose connection
const URL = process.env.URL;

// Connect to our authentication DB in Mongo Atlas
mongoose
  .connect(URL, {
    dbName: "authentication",
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Now connected to MongoDB!"))
  .catch(err => console.error("Something went wrong", err));

// Load index.html page provided
app.use(express.static(path.join(__dirname, "client", "build")));

// Parse request body as json
app.use(express.json());
// Custom Routing for our app here
app.use("/api/user", user);

app.use("/api/auth", auth);
app.use('/api/profile', require('./routes/profile'));

app.get("*", (req, res) => {
// Listen on port 8000
let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Harvesthru app is running on port ${port}`);
});

/* https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
*/
