// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

// Make bodyParser work
app.use(bodyParser.urlencode({extended: false}));
app.use(bodyParser.json());

// Search for and find the routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
