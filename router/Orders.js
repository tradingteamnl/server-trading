//load modules
var express = require('express');
var mysql = require('mysql');
var fs = require('fs');

//laat config bestanden
var fileLocation = JSON.parse(fs.readFileSync('./config/fileLocation.txt')).fileLocation;

//load codes
var ConsoleColor = require(fileLocation+'/ConsoleColor.js');
var ConfigGetter = require(fileLocation+'/configGetter.js');
var GetIpAddress = require(fileLocation+'/scripts/IpAddress.js');

//Router
var Router = express.Router();


//connection
var MYSQLConnection =  mysql.createConnection(ConfigGetter.MysqlCreatConnection());

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
    
    //verwerk alle data van het inkomende verkeer
    var ip = GetIpAddress.ipAddress(req);
    var tempData = JSON.parse(req.body);
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
    
    if(sqlQuery != finalSqlQuery){
        console.log(sqlRequest());
    }
    
    function sqlRequest(){
        MYSQLConnection.query(sqlQuery, function (error, results, fields) {
            // error will be an Error if one occurred during the query 
            // results will contain the results of the query 
            // fields will contain information about the returned results fields (if any) 
            if(error){
                console.log(error);
            } else {
                console.log("results "+JSON.stringify(results));
                res.send(results[0]);
            }
        });
    };
    console.log(sqlRequest(sqlQuery));
});

exports.ordersGetList = function(sql, ip) {
    
    
    
};

module.exports = Router;

console.log(ConsoleColor.log()+"Orders.js is beschikbaar.");