var path = require('path');
var express = require('express');

var rootDir = require('../util/path');

var router = express.Router();

router.get('/', function (req, res) {
	res.status(200).sendFile(path.join(rootDir, 'views', 'home.html'))
});

module.exports = router;