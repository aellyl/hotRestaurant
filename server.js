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
var reservations = [{name: "chris", }];
var waitlist = [];

// Routes
// =============================================================

// Homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// /tables Get
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// /reserve POST
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// api/tables get
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

// api/waitlist GET
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

