var mongoose = require('mongoose');   
var User = mongoose.model('User');
var bCrypt = require('./bCrypt.js');
// var async = require('async');

module.exports = function(passport, LocalStrategy){


	passport.serializeUser(function(user, done) {
		console.log('serializing user:', user.email);
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
	  User.findById(id, function(err, user) {
	  	console.log('deserializing user:',user.email);
	    done(err, user);
	  });
	});

	passport.use('register', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback : true
		},
		function(req ,email, password, done) { 
			User.findOne({ 'email' :  email }, function(err, user) {

				if (user) {
					console.log('This mail is already taken')
					return done(null, false);
				} 

				var newUser = new User({
					email: email,
					password: bCrypt.createHash(password),
          station: req.body.station,
          admin: req.body.admin
				});
        
        console.log(newUser.station)
        
				newUser.save(function(err) {
					if (err){
						throw err;  
					}
					console.log(newUser.email + ' Registration succesful');
					return done(null, newUser);
				});

			});
		}
	));

	passport.use('login', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password'
		},
		function(email, password, done) { 

			User.findOne({ 'email' :  email }, 
				function(err, user, req) {
					if (err){
						return done(err);
					}
					if (!user){
						return done(null, false);                 
					}

					if (!bCrypt.isValidPassword(user, password)){
						return done(null, false);
					}

					return done(null, user);
				}
			);
		}
	));
};
