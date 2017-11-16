var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');   

module.exports = {
	create: function(req, res, next){
		var title = req.body.title
		var stations = req.body.stations
		var descr = req.body.descr
		var startDate = req.body.startDate
		var endDate = req.body.endDate

		req.checkBody('title', 'Uzupełnij pole tytuł').notEmpty();
		req.checkBody('title', 'Tytuł może składać od 5 do 40 znaków').len(10, 40);
    
		req.checkBody('startDate', 'Zaznacz datę początkową polecenia').notEmpty();
     
    if(endDate){
      req.checkBody('endDate', 'Data koncowa nie moze byc mniejsza niz poczatkowa').gte(startDate)
    }
    
		req.checkBody('stations', 'Zaznacz conajmniej jedną stację').notEmpty();

		req.checkBody('descr', 'Brak opisu polecenia').notEmpty();
		req.checkBody('descr', 'Opis może składać od 10 do 4000 znaków').len(10, 4000);

		var errors = req.validationErrors();

		if(errors){
			return res.send(errors)
		}
		next()
	}
};
