var express = require('express');
var router = express.Router();

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


//user is a document with username and hashed password
//password is the plain text password
var checkUser = function(user, password, callback) {
 
    bcrypt.compare(password, user.password, function(err, res) {
    	callback(res);
    });

}

/* GET login page. */
router.get('/', function(req, res, next) {
  var redirect = req.query.redirect;
  res.render('login', {redirect: redirect});
});

/* POST login page. */
router.post('/', function(req, res, next) {

  var username = req.body.username;
  var redirect = req.body.redirect;
  var password = req.body.password;
  var db = req.app.locals.db;
  var token;

  console.log(username);

  db.collection("Users").findOne({"username": username}, function(err, user) {
  	if(user) { //if the user exists

  		checkUser(user, password, function(result) {
  			if(result) {
          console.log("Good password");
  				var options = {algorithm: 'HS256', expiresIn: '2h', header: {'alg': 'HS256', 'typ': 'JWT'}};
          jwt.sign({ usr: username }, req.app.locals.secretKey, options, function(err, token) {
              res.cookie('jwt', token);
              if(redirect) res.redirect(redirect);
              else res.status(200).send("Successful user authentication");
          });	
  			} else {
          console.log("Wrong password");
  				res.render('login', {redirect: redirect});
  			}	
        });

  	} else {
      console.log("User doesn't exist");
  		res.render('login', {redirect: redirect});
  	}
  })

});

module.exports = router;