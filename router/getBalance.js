//load modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');

//router
var Router = express.Router();

//Router.use
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));

//krijg de filelocation
var fileLocation = JSON.parse(fs.readFileSync('./config/fileLocation.txt')).fileLocation;

//load modules
var GetIpAddress = require(fileLocation+'/scripts/IpAddress.js');
var configGetter = require(fileLocation+'/configGetter.js');
var ConsoleColor = require(fileLocation+'/ConsoleColor.js');

//connection
var MYSQLConnection = mysql.createConnection(configGetter.MysqlCreatConnection());

//connectie maken met mysql
MYSQLConnection.connect(function(err){
    if(err){
        console.error(ConsoleColor.error()+err);
    } else {
        console.log(ConsoleColor.log()+"Connectie met mysql.");
    }
});

//balance info return
Router.post('/', function(req, res){
    
    //vraag data op
    var macadres = req.body.macadres;
    
    //Maak een sql string
    var ip = GetIpAddress.ipAddress(req);
    
    //voor sting uit
    var sqlQuery = "SELECT * FROM cryptoData.balance WHERE ip='"+ip+"' AND macadres='"+macadres+"';";
    MYSQLConnection.query(sqlQuery, function (err, resulttwo) {
        if (err) {
            console.error(ConsoleColor.error()+"Probleem bij balance data op te vragen. Dit probleem is bij getBalance.js.");
        } else {
            res.send(resulttwo);
        }
    });
});

//export Router
module.exports = Router;