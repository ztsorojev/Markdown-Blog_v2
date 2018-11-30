var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');

/* For ALL routes, check the token first */
router.all('/:username*', function(req, res, next) {
	var token = req.cookies.jwt;
	console.log(token);
	if(token) {
		jwt.verify(token, req.app.locals.secretKey, function(err, decoded) {
			if(err) {
				console.log("Can't verify token");
				res.sendStatus(401);
			} else {
				if(req.params.username == decoded.usr) {
					next(); // pass control to the next handler
				} else {
					console.log("Wrong user");
					res.sendStatus(401);
				}
			}
		});
	} else {
		console.log("Cookie not set");
		res.sendStatus(401);
	}
 });


/* GET all posts from user */
router.get('/:username', function(req, res, next) {
  
	var db = req.app.locals.db;
	var username = req.params.username;

	db.collection("Posts").find({"username": username}).toArray(function(err, posts) {
		if(err) {
			console.log("Can't find posts for this user");
			return res.status(404).json();
		} else {
			return res.status(200).json(posts);
		}
	});

});

/* GET post with postid from user */
router.get('/:username/:postid', function(req, res, next) {
  
	var db = req.app.locals.db;
	var username = req.params.username;
	var postid = parseInt(req.params.postid);
	// if postid = NaN or is negative
	if(postid !== postid || postid < 0) return res.sendStatus(400);


	var query = { "username": username, "postid": postid };

	db.collection("Posts").find(query).toArray(function(err, post) {
		if(post) {
			return res.status(200).json(post);
		} else {
			return res.status(404).json();
		}
	});

});


/* POST post with postid from user */
router.post('/:username/:postid', function(req, res, next) {
  
	var db = req.app.locals.db;
	var username = req.params.username;
	var postid = parseInt(req.params.postid);

	// if postid = NaN or is negative
	if(postid !== postid || postid < 0) return res.sendStatus(400);
	//if the request doesn't have a body or title
	if(req.body.title==null || req.body.body==null) return res.sendStatus(400);

	var title = req.body.title;
	var body = req.body.body;
	var created = new Date().getTime();
	var modified = new Date().getTime();

	var query_check = { "postid": postid, "username": username };
	var query_insert = { "postid": postid, "username": username, "title": title, "body": body, "created": created, "modified": modified };

	db.collection("Posts").findOne(query_check, function(err, post) {
		if(post) {
			//the post already exists
			return res.sendStatus(400);
		} else {
			db.collection("Posts").insertOne(query_insert, function(err, result) {
				if(err) throw err;
				else return res.sendStatus(201);
			})
		}
	});

});

/* PUT post with postid from user */
router.put('/:username/:postid', function(req, res, next) {
  
	var db = req.app.locals.db;
	var username = req.params.username;
	var postid = parseInt(req.params.postid);
	// if postid = NaN or is negative
	if(postid !== postid || postid < 0) return res.sendStatus(400);

	if(!(req.body.title && req.body.body)) {
		return res.sendStatus(400);
	}
	var title = req.body.title;
	var body = req.body.body;
	var modified = new Date().getTime();

	var query_cdt = { "postid": postid, "username": username };
	var query_update = {$set: { "title": title, "body": body, "modified": modified }};

	db.collection("Posts").findOne(query_cdt, function(err, post) {
		if(post) {
			db.collection("Posts").updateOne(query_cdt, query_update, function(err, result) {
				if(err) throw err;
				else return res.sendStatus(200);
			})
			
		} else {
			return res.sendStatus(400);
		}
	});

});

/* DELETE post with postid from user */
router.delete('/:username/:postid', function(req, res, next) {
  
	var db = req.app.locals.db;
	var username = req.params.username;
	var postid = parseInt(req.params.postid);
	// if postid = NaN or is negative
	if(postid !== postid || postid < 0) return res.sendStatus(400);

	var query = { "postid": postid, "username": username };

	db.collection("Posts").findOne(query, function(err, post) {
		if(post) {
			db.collection("Posts").deleteOne(query, function(err, result) {
				if(err) throw err;
				else return res.sendStatus(200);
			});
		} else {
			return res.sendStatus(400);
		}
	});

});


module.exports = router;
