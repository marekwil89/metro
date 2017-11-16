var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Command = mongoose.model('Command');  

module.exports = {

	login: function(req, res, next){
		var email = req.body.email
		var password = req.body.password

		req.checkBody('email', 'Uzupełnij pole email').notEmpty();
		req.checkBody('password', 'Uzupełnij pole hasło').notEmpty();

		var errors = req.validationErrors();
		if(errors){
			return res.send(errors)
		}
		next()	
	},
 
	register: function(req, res, next){
		var email = req.body.email
		var password = req.body.password
		var repeatPassword = req.body.repeatPassword

		req.checkBody('email', 'Uzupełnij pole email').notEmpty();
		req.checkBody('email', 'Nieprawidłowy format email').isEmail();
		req.checkBody('email', 'Email może składać od 6 do 20 znaków').len(6, 20);

		req.checkBody('password', 'Uzupełnij pole hasło').notEmpty();
		req.checkBody('password', 'hasło może składać od 6 do 20 znaków').len(6, 20);

		req.checkBody('password', 'Hasła się nie zgadzają').equals(repeatPassword);

		var errors = req.validationErrors();
		if(errors){
			return res.send(errors)
		}
		next()	
	},
 
	isAuth: function(req, res, next){
		if(!req.isAuthenticated()){
			var errors = [];
			errors[0] = {
        param: 'fail',
				msg: "Musisz byc zalogowany"
			};
			return res.send(errors)
		}
		next()
	},
 
	isAdmin: function(req, res, next){
   if(req.user.admin === false){
     console.log('do this')
			var errors = [];
			errors[0] = {
        param: 'fail',
				msg: "Musisz byc zalogowany jako admin"
			};
			return res.send(errors)
   }
   next()		
	},
 
 	isSameUser: function(req, res, next){
    Command.findOne({_id: req.params.id}, function(err, command){
      console.log(command.author.email + ' ' + req.user.email)
      if(command.author.email !== req.user.email){
  			var errors = [];
  			errors[0] = {
          param: 'fail',
  				msg: "Nie jestes autorem tego polecenia"
  			};
  			return res.send(errors)
      }
      next()
    })
	}
}