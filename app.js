var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var MongoClient = require('mongodb').MongoClient;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');
var loginRouter = require('./routes/login');
var apiRouter = require('./routes/api');

var app = express();

var url = 'mongodb://localhost:27017';
var db;
var dbName = "BlogServer";

//Initialize the DB connection
MongoClient.connect(url, { useNewUrlParser: true })
  .then(database => {
    db = database.db(dbName);
    app.locals.db = db;
    console.log("Connected successfully to server");
  }).catch(error => console.error(error));


app.locals.secretKey = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


let jwt = require('jsonwebtoken');
app.all('/editor*', function(req, res, next) {
  let token = req.cookies.jwt;
  if(token) {
    jwt.verify(token, "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c", function(err, decoded) {
      if(err) {
        res.redirect('/login?redirect=/editor/');
      } else {
        next(); // pass control to the next handler
      }
    });
  } else {
    res.redirect('/login?redirect=/editor/');
  }
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blog', blogRouter);
app.use('/login', loginRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
