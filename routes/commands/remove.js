var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validAuth = require('../validation/auth.js')
var Command = mongoose.model('Command');

router.delete('/remove/:id', validAuth.isAuth, validAuth.isAdmin ,validAuth.isSameUser, 
  function(req, res){
    Command.remove({_id: req.params.id}, function(err, command){
      if(err){
        throw err    
      }
      return res.send('success')
    })
})

module.exports = router;