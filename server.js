'use strict';

var express = require('express');
var mongo = require('mongodb');
var routes = require('./app/routes/index.js');

var app = express();

mongo.connect('mongodb://heroku_5xmh9kp6:n8soimuuccsde5tsq6er5jlbie@ds037205.mongolab.com:37205/heroku_5xmh9kp6', function(err, db) {

    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('Successfully connected to MongoDB on port 27017.');
    }

    // The format follows as, alias to use for real path, also allows permission to such path.
    app.use('/public', express.static(process.cwd() + '/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
    app.use('/src', express.static(process.cwd() + '/app/src'));

    routes(app, db);

    var port = process.env.PORT || 8080;
    app.listen(port, function() {
        console.log('Node.js listening on port ' + port);
    });

});
