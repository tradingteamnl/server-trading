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

//function
Router.post('/', function(req, res){
    
    //vraag data op
    console.log(req.body);
    
    //Maak een sql string
    var ip = GetIpAddress.ipAddress(req);
    console.log(ip)
    
    //voor sting uit
    console.log("SELECT * FROM cryptoData.balance WHERE ip='"+ip+"';");
    MYSQLConnection.query("SELECT * FROM cryptoData.balance WHERE ip='"+ip+"';", function (err, resulttwo) {
        if (err) {
            console.error(ConsoleColor.error()+"Probleem bij balance data op te vragen. Dit probleem is bij getBalance.js.");
        } else {
            res.send(resulttwo);
        }
    });
});

//orderssql query
Router.post('/ordersSqlQuery', function(req, res){
    
    //verwerk alle data van het inkomende verkeer
    var ip = GetIpAddress.ipAddress(req);
    var tempData = req.body;
    var settingOrdersBittrex = JSON.parse(tempData[0]).bittrex;
    var settingOrdersPoloniex = JSON.parse(tempData[0]).poloniex;
    
    
    //var sql
    var sqlQuery = "SELECT * FROM orderLimiet";
    var finalSqlQuery = "SELECT * FROM orderLimiet";
    
    //settingOrderBittrex
    if(settingOrdersBittrex == true){
        
        if(sqlQuery == finalSqlQuery) {
            sqlQuery += " WHERE handelsplaats='bittrex'";   
            console.log(sqlQuery);
        } else {
            sqlQuery += " AND handelsplaats='bittrex";
        }
    };
    
    //settingOrderPoloniex
    if(settingOrdersPoloniex == true){
        
        if(sqlQuery == finalSqlQuery) {
            sqlQuery += " WHERE handelsplaats='poloniex'";
        } else {
            sqlQuery += " AND handelsplaats='poloniex";
        }
    };
    
    //mysql connection
    MYSQLConnection.query(sqlQuery, function (error, results, fields) {
        // error will be an Error if one occurred during the query 
        // results will contain the results of the query 
        // fields will contain information about the returned results fields (if any) 
        if(error){
            console.log(error);
        } else {
            console.log("results "+JSON.stringify(results));
            if(sqlQuery != finalSqlQuery){
                res.send(results[0]);
            }
        }
    });
});






//export Router
module.exports = Router;