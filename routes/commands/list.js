var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validAuth = require('../validation/auth.js')
var Command = mongoose.model('Command');

router.get('/activeList', validAuth.isAuth, validAuth.isAdmin,
  function(req, res){
  
  Command.find({archived: false}, function(err, commands){
    if(err){
      throw err
    }
    return res.send(commands)
  })

});

router.get('/archivedList', validAuth.isAuth, validAuth.isAdmin,
  function(req, res){
  Command.find({archived: true}, function(err, commands){
    if(err){
      throw err
    }
    return res.send(commands)
  })
});

router.get('/activeListCurrentStation/:station', validAuth.isAuth,
  function(req, res){
  var station = req.params.station.toUpperCase()
  Command.find({archived: false ,stations: {$elemMatch:  {name: station}}}, function(err, commands){
    if(err){
      throw err    
    }
    return res.send(commands)
  })
});

router.get('/archivedListCurrentStation/:station', validAuth.isAuth,
  function(req, res){
  var station = req.params.station.toUpperCase()
  Command.find({archived: true ,stations: {$elemMatch:  {name: station}}}, function(err, commands){
    if(err){
      throw err    
    }
    return res.send(commands)
  })
})


module.exports = router;