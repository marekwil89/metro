var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commandSchema = new mongoose.Schema({
  author: {type: Object},
	title: {type: String},
	stations: [{
    name: {type: String, uppercase: true},
    fullName: {type: String},
    selected: {type: Boolean}
	}],
  descr: {type: String},
	startDate: {type: Date, default: null},
	endDate: {type: Date, default: null},
  archived: {type: Boolean, default: false},
  created_at: {type: Date, default: Date.now}
})

mongoose.model('Command', commandSchema);