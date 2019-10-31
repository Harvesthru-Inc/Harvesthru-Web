const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const app = express();
const path = require("path");
const ObjectId = require("mongodb").ObjectId;

// connect and get mongodb client object
var database;
const URL =
  "mongodb+srv://harvesthruadmin:Entrepreneurs007%24@harvesthru-back-xwbyo.mongodb.net/test?retryWrites=true";
MongoClient.connect(URL, function(err, client) {
  if (err) {
    console.log("Error occurred while connecting to MongoDB Atlas...\n", err);
  }
  database = client.db("sample_airbnb");
});

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));
// parse request body as json
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// routers for HTTP requests
// example: retrieve data using name
app.post("/read", (req, res) => {
  let cursor = database.collection("listingsAndReviews");
  cursor.find({ name: req.body.name }).toArray((error, documents) => {
    if (error) throw error;
    res.send(documents);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("listen on port 8000");
});
