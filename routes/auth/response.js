var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose'); 
var User = mongoose.model('User');

//Authenticate routes

// router.get('/isAlreadyLoged', function(req, res){
// 	console.log('already loged : ' + req.user)
// 	return res.send(req.user)
// })

// router.get('/logout', function(req, res){
//   req.logOut();
//   res.redirect('/');
// });

//response 

router.get('/success', function(req, res){
	res.send({state: 'success', user: req.user ? req.user : null, message: "Success"});
});

router.get('/registerFail', function(req, res){
	res.send([{msg: 'This email is already exist', param: 'fail'}])
});

router.get('/loginFail', function(req, res){
	res.send([{msg: 'Bad login or password', param: 'fail'}])
});	

// router.get('/userList', function(req, res){
//   User.find({}, function(err, user){
//     if(err){
//       throw err
//     }
//     return res.send(user)
//   })
// });

// passport.deserializeUser(function(id, done) {
// 	User.findById(id, function(err, user) {
// 		if(user){
// 			console.log('deserializing user:',user.email);
// 			done(err, user);				
// 		}
// 		else{
// 			User.findById(id, function(err, user){
// 				console.log('deserializing user:',user.email);
// 				done(err, user);					
// 			})
// 		}

// 	});
// });

module.exports = router;