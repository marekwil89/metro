var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session')
var mongoose = require('mongoose');
var passport = require('passport');
var expressValidator = require('express-validator');

//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myapp');          

require('./models/command');
require('./models/user');

var register = require('./routes/auth/register.js');
var login = require('./routes/auth/login.js');
var create = require('./routes/commands/create.js');
var list = require('./routes/commands/list.js');
var remove = require('./routes/commands/remove.js');
var archive = require('./routes/commands/archive.js');
var detail = require('./routes/commands/detail.js');
var response = require('./routes/auth/response.js');
var logOut = require('./routes/auth/logOut.js');
var getLogedUser = require('./routes/auth/getLogedUser.js');

var app = express();

app.use(logger('dev'));
app.use(session({
    secret: 'keyboard cat',
    name: 'itsname',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
	errorFormatter: function(param, msg, value) {
		var namespace = param.split('.')
		var root    = namespace.shift()
		var formParam = root;

		while(namespace.length) {
			formParam += '[' + namespace.shift() + ']';
		}
		return {
			param : formParam,
			msg   : msg,
			value : value
		};
	},
  customValidators: {
    gte: function(param, num) {
      return param >= num;
    }
  }
}));

app.use('/auth', register);
app.use('/auth', login);
app.use('/auth', logOut);
app.use('/auth', getLogedUser);
app.use('/response', response);
app.use('/commands', create);
app.use('/commands', archive);
app.use('/commands', list);
app.use('/commands', detail);
app.use('/commands', remove);

app.listen(8000, function(){
  console.log('8000');
});
