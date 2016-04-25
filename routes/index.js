var express = require('express');
var router = express.Router();
var passwordless = require('passwordless');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Voting App'
  });
});

/* GET polls page. */
router.get('/polls', function(req, res, next) {
  res.render('polls', {
    title: 'Voting App: Polls'
  });
});

/* GET login screen. */
router.get('/login', function(req, res) {
  res.render('login', {
    title: 'Voting App: Login'
  });
});

/* POST login details. */
router.post('/sendtoken',
  passwordless.requestToken(
    // Turn the email address into an user ID
    function(user, delivery, callback, req) {
      // usually you would want something like:
      User.find({
          email: user
        }, callback(ret) {
          if (ret)
            callback(null, ret.id)
          else
            callback(null, null)
        })
        // but you could also do the following
        // if you want to allow anyone:
        // callback(null, user);
    }),
  function(req, res) {
    // success!
    res.render('sent');
  });

module.exports = router;
