var express = require('express');
var app = express();
var db = require('./db');
var path = require('path');
var bodyParser = require('body-parser');

var UserController = require('./user/UserController');
app.use('/users', UserController);


app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(function(req,res,next){

		res.locals.errors = null;
		next();


})
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json());
app.get('/index', function(req,res){

	res.render('index.ejs');
	
})

module.exports = app;
