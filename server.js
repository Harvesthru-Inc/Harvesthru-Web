const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const app = express();
const path = require("path");

// connect and get mongodb client object
var database;
const URL =
  "mongodb+srv://harvesthruadmin:Entrepreneurs007%24@harvesthru-back-xwbyo.mongodb.net/test?retryWrites=true";
MongoClient.connect(URL, function(err, client) {
  if (err) {
    console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
  }
  database = client;
});

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));

// routers for HTTP requests
// app.get("/", ...)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(8000, () => {
  console.log("listen on port 8000");
});
