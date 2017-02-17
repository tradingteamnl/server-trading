//load modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

//router
var Router = express.Router();

//Router.use
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));

//krijg de filelocation
var fileLocation = JSON.parse(fs.readFileSync('./config/fileLocation.txt')).fileLocation;

//post
app.use('/updatebalance', require(fileLocation+'/router/updateBalance.js'));
app.use('/getbesteprijs', require(fileLocation+'/router/GetBestePrijs.js'));
app.use('/ordersystem', require(fileLocation+'/router/GetOrders.js'));

//getter
app.use('/getorder', require(fileLocation+'/router/GetOrders.js'));
app.use('/getbalance', require(fileLocation+'/router/GetBalance.js'));

//export Router
module.exports = app;