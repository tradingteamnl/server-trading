//load modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');

var app = express();

//router
var Router = express.Router();

//Router.use
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));

//krijg de filelocation
var fileLocation = JSON.parse(fs.readFileSync('./config/fileLocation.txt')).fileLocation;

//load modules
var GetIpAddress = require(fileLocation+'/scripts/IpAddress.js');
var ConsoleColor = require(fileLocation+'/ConsoleColor.js');

//laat config
var config = JSON.parse(fs.readFileSync(fileLocation+'/config.json'));

//connection
var MYSQLConnection = mysql.createConnection({
    host     : config.mysql.host,
    user     : config.mysql.user,
    password : config.mysql.password,
    database : config.mysql.DBName
});

//connectie maken met mysql
MYSQLConnection.connect(function(err){
    if(err){
        console.error(ConsoleColor.error()+err);
    } else {
        console.log(ConsoleColor.log()+"Connectie met mysql.");
    }
});

//post
app.use('/updatebalance', require(fileLocation+'/router/updateBalance.js'));

//getter
app.use('/getorder', require(fileLocation+'/router/GetOrders.js'));
app.use('/getbalance', require(fileLocation+'/router/GetBalance.js'));

//export Router
module.exports = app;