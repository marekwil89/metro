var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  email: {type: String},
  password: {type: String},
  repeatPassword: {type: String},
  created_at: {type: Date, default: Date.now},
  station: {type: String},
  admin: {type: Boolean, default: false}
})

mongoose.model('User', userSchema);