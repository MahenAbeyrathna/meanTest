var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    localStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV= process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/routes')(app);

var User= mongoose.model('User');

passport.use(new localStrategy(
    function(userName, password, done){
        User.findOne({userName:userName}).exec(function(err,user){
            if(user){
                console.log(33333333);
                return done(null,user);
            }
            else{
                console.log(4444444);
                return done(null,false);
            }
        });
    }
    ));

passport.serializeUser(function(user, done){
    if(user){
        console.log(11111,user._id);
        done(null, user._id);
    }
});

passport.deserializeUser(function(id, done){
    User.findOne({_id:id}).exec(function(err,user){
        if(user){
            return done(null, user);
        }
        else{
            return done(null, false);
        }
    });
});
app.listen(config.port);
console.log('Listing to the port'+config.port+ "...");
