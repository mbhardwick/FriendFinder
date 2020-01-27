var path = require('path');
var express = require('express');

var router = express.Router();

var friendsData = require('../data/friends');

router.get('/data/friends', function (req, res) {
	console.log(friendsData);
	res.json(friendsData);
});

router.post('/data/friends', function(req, res) {
	console.log(req.body);
	
	//stores user's input
	var userInput = req.body;

	//collects and parses users' scores
	for(var i=0; i<userInput.scores.length; i++) {
		userInput.scores[i] = parseInt(userInput.scores[i]);
	}

	var bestMatch = 0;
	var minDiff = 1000;

	//compare scores
	for (var i=0; i<friendsData[i].length; i++) {
		var totalDiff = 0;

		for (var j=0; j<friendsData.length; i++) {
			var difference = Math.abs(userInput.scores[j] - friendsData[i].scores[j]);
			
			totalDiff += difference;
		}
		if (totalDiff < minDiff) {
			bestMatch = i;
			minDiff = totalDiff;
		}
	};
	res.json(friendsData[bestMatch]);
	console.log(friendsData[bestMatch]);
	friendsData.push(userInput);
});

module.exports = router;