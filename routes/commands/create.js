var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validAuth = require('../validation/auth.js')
var validCmd = require('../validation/commands.js')
var Command = mongoose.model('Command');

router.post('/create', validAuth.isAuth, validAuth.isAdmin , validCmd.create,
  function(req, res){

    var newCommand = new Command({
      author: req.user,
      title: req.body.title,
      stations: req.body.stations,
      descr: req.body.descr,
      startDate: req.body.startDate,
      endDate: req.body.endDate
    })

    newCommand.save(function(err){
      if(err){
        throw err    
      }
      return res.send('success')
    })

});

module.exports = router;