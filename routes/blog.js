var express = require('express');
var router = express.Router();
var commonmark = require('commonmark');

/* GET single blog post page. */
router.get('/:username/:postid', function(req, res, next) {
  var db = req.app.locals.db;
  console.log("Request with postid: " + req.params.postid + " and username: " + req.params.username);
  db.collection("Posts").findOne({ $and: [{ "username": req.params.username }, { "postid": parseInt(req.params.postid) }] }, function(err, post) {
  	if(post) {
  		var reader = new commonmark.Parser();
		var writer = new commonmark.HtmlRenderer();

		post.title = writer.render(reader.parse(post.title));
		post.body = writer.render(reader.parse(post.body));
		
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 'hour': 'numeric', 'minute':'numeric' };
		post.created = new Date(post.created).toLocaleDateString("en-US", options);
		post.modified = new Date(post.modified).toLocaleDateString("en-US", options);

	  	res.render('singlePost', { post: post});
  	} else {
  		res.sendStatus(404);
  	}
  });	
});

/* GET blog page with all the posts of username. */
router.get('/:username', function(req, res, next) {
  	var db = req.app.locals.db;
  	var username = req.params.username;
  	var startID = parseInt(req.query.start);
  	if(!startID) startID = 1; 


	var query = { "username": username, "postid": {$gte: startID } };

	db.collection("Posts").find(query).toArray(function(err, docs) {
		if(docs) {

			if(docs.length > 5) {
				nextPageUrl = "?start=" + docs[5].postid;
				docs = docs.slice(0, 5);
			} else {
				nextPageUrl = "";
			}

			var reader = new commonmark.Parser();
			var writer = new commonmark.HtmlRenderer();
			for (var post of docs) {
				post.title = writer.render(reader.parse(post.title));
				post.body = writer.render(reader.parse(post.body));
				post.created = new Date(post.created).toLocaleString();
				post.modified = new Date(post.modified).toLocaleString();
			}

			res.render('listPost', { username: username, nextPageUrl: nextPageUrl, posts: docs});

	  	} else {
	  		res.sendStatus(404);
	  	}
	});
});

module.exports = router;
