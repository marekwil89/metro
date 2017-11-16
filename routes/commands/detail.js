var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validAuth = require('../validation/auth.js')
var Command = mongoose.model('Command');

router.get('/detail/:id', validAuth.isAuth, 
  function(req, res){

  Command.findOne({_id: req.params.id}, function(err, command){
    if(err){
      throw err    
    }
    return res.send(command)
  })
})

module.exports = router;