var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: false
}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(methodOverride("_method"));

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

app.listen(port);