//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, './app/public')));

//Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
	console.log("Server listening on: http://localhost:" + PORT);
});