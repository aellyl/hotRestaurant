// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var reservations = [{
  name: "chris",
  email: "test@gmail.com",
  phone: "512-300-8899"
}];
var waitlist = [];

// Routes
// =============================================================

// Homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// /tables Get
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});
// /reserve POST
app.post("/api/new", function(req, res) {
  var newtable = req.body;
  newtable.name = newtable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newtable);
  if (reservations.length < 5)
  {
    reservations.push(newtable);
    res.send(true);
  }
  else{
    waitlist.push(newtable);
    res.send(false);
  }
});

app.get("/reserve",function(req,res){
  res.sendFile(path.join(__dirname, "add.html"));
});

// api/tables get
app.get("/api/tables", function(req, res) {
  res.json(reservations);
});

// api/waitlist GET
app.get("/api/waitlist", function(req, res) {
  res.json(waitlist);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
