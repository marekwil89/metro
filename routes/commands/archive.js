var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var validAuth = require('../validation/auth.js')
var Command = mongoose.model('Command');

router.put('/archive/:id', validAuth.isAuth, validAuth.isAdmin, validAuth.isSameUser,
  function(req, res){
    Command.findById({_id: req.params.id}, function(err, archiveCommand){
 
      archiveCommand.archived = true

      archiveCommand.save(function(err){
        if(err){
          throw err    
        }
        return res.send('success')
      })
    })
});

module.exports = router;