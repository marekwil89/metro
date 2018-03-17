var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validAuth = require('../validation/auth.js')
var Command = mongoose.model('Command');
var limitOnSite = 100;


router.get('/activeList', validAuth.isAuth, validAuth.isAdmin,
  function(req, res){
  
  Command.find({archived: false}, function(err, commands){
    if(err){
      throw err
    }
    return res.send(commands)
  })

});

router.get('/archivedList/:page', validAuth.isAuth, validAuth.isAdmin,
  function(req, res){

    //TO-DO do this better :);

    var page = req.params.page;
    page -= 1;
    if(page <= 0){
        page = 0;
    }

    var pageOptions = {
        page: page || 0,
        limit: limitOnSite
    };

    Command.find({archived: true}).skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit).exec(function (err, commands) {
        if(err) {
            throw err;
        };
        res.json(commands);
    })
});

router.get('/archivedLength', validAuth.isAuth, validAuth.isAdmin, function(req, res){
  Command.find({archived: true}, function(err, commands){
      if(err){
          throw err;
      }
      return res.json({length: commands.length});
  })
})

router.get('/activeListCurrentStation/:station', validAuth.isAuth, function(req, res){
  var station = req.params.station.toUpperCase()
  Command.find({archived: false ,stations: {$elemMatch:  {name: station}}}, function(err, commands){
    if(err){
      throw err    
    }
    return res.send(commands)
  })
});

router.get('/archivedLengthByStation/:station', validAuth.isAuth, function(req, res){
  var station = req.params.station.toUpperCase();
  Command.find({archived: true ,stations: {$elemMatch:  {name: station}}}, function(err, commands){
      if(err){
          throw err;
      }
      return res.json({length: commands.length});
  })
})



router.get('/archivedListCurrentStation/:station/:page', validAuth.isAuth, function(req, res){
  var station = req.params.station.toUpperCase()
  var page = req.params.page;

  page -= 1;
  if(page <= 0){
      page = 0;
  }

  var pageOptions = {
      page: page || 0,
      limit: limitOnSite
  };

  Command.find({archived: true, stations: {$elemMatch:  {name: station}}}).skip(pageOptions.page * pageOptions.limit).limit(pageOptions.limit).exec(function (err, commands) {
      if(err) {
          throw err;
      };
      res.json(commands);
  })
})


module.exports = router;