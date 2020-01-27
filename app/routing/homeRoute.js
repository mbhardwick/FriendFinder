var path = require('path');
var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
	res.status(200).sendFile(path.join(__dirname + '/../public/home.html'))
});

module.exports = router;