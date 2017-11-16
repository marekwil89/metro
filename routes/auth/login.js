var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var validAuth = require('../validation/auth.js')
var passConfig = require('./passportConfig.js')

passConfig(passport, LocalStrategy);

router.post('/login', validAuth.login,
  passport.authenticate('login', {
    successRedirect: '/response/success',
    failureRedirect: '/response/loginFail'
  })
)

module.exports = router;