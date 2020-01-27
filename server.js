var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import routes
var htmlRoutes = require("./app/routing/htmlRoutes");
var homeRoute = require('./app/routing/homeRoute');
var friendRoute = require('./app/routing/friendsRoute');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', htmlRoutes);
app.use('/data', friendRoute);
app.use(homeRoute);


app.use(function(req, res){
	res.status(404).sendFile(path.join(__dirname, 'app', 'public', 'survey.html'));
});

app.listen(PORT, function(){
	console.log("App listening on PORT: "+PORT);
});