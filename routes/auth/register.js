var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var validAuth = require('../validation/auth.js')
var passConfig = require('./passportConfig.js')


passConfig(passport, LocalStrategy);

router.post('/register', validAuth.register, 
  passport.authenticate('register', {
    successRedirect: '/response/success',
    failureRedirect: '/response/registerFail'
  })
)

module.exports = router;