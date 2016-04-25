var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var passwordless = require('passwordless');
var MongoStore = require('passwordless-mongostore');
var email = require("emailjs");
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  secret: process.env.secret,
  resave: true,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 3600000
  }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, '/public'),
  dest: path.join(__dirname, '/public'),
  prefix: '/stylesheets',
  debug: true,
  indentedSyntax: true,
  sourceMap: true
}));

// Email setting
var smtpServer = email.server.connect({
  user: process.env.email,
  password: process.env.epwd,
  host: process.env.smtp,
  ssl: true
});

// MongoDB TokenStore
passwordless.init(new MongoStore(process.env.mongoURI));

// Set up a delivery service
passwordless.addDelivery(
  function(tokenToSend, uidToSend, recipient, callback) {
    var host = 'localhost:3000';
    smtpServer.send({
      text: 'Hello!\nAccess your account here: http://' + host + '?token=' + tokenToSend + '&uid=' + encodeURIComponent(uidToSend),
      from: process.env.email,
      to: recipient,
      subject: 'Token for ' + host
    }, function(err, message) {
      if (err) {
        console.log(err);
      }
      callback(err);
    });
  });

// passwordless middleware
app.use(passwordless.sessionSupport());
app.use(passwordless.acceptToken({
  successRedirect: '/'
}));



app.use('/', routes);
app.use('/polls', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
