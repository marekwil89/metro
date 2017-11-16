var express = require('express');
var router = express.Router();
var passport = require('passport');
// var mongoose = require('mongoose'); 
// var User = mongoose.model('User');

router.get('/logout', function(req, res){
  console.log(req.user)
  req.logOut();
  console.log(req.user)
  res.redirect('/');
});

module.exports = router;