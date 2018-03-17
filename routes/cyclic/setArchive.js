const express = require('express');
const mongoose = require('mongoose');
const schedule = require('node-schedule');
var Command = mongoose.model('Command');

const setArchive = schedule.scheduleJob('*/3 * * * * *', function(req, res, next){
    Command.find({archived: false}, function(err, commands){
        var now = (new Date().getTime());

        commands.forEach(function(value){
            var commandEndDate = (new Date(value.endDate)).getTime()
            if(commandEndDate <= now){
                value.archived = true;
            }

            value.save(function(err){
                if(err){
                    console.log(err)
                }
                console.log('check archived if endDate');
                // res.send('success')
            })
        });

      })
});

module.exports = setArchive;