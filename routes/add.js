var data = require("../data.json");

exports.addFriend = function(req, res) {
	// Your code goes here
	var name = req.query.name;
	var desc = req.query.description;
	var img = "http://lorempixel.com/400/400/people";
	
	var newFriend = {};
	newFriend["name"] = name;
	newFriend["description"] = desc;
	newFriend["imageURL"] = img;
	
	console.log(newFriend);
	data["friends"].push(newFriend);
	
	res.render('add');
}