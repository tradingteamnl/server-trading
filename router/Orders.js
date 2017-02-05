//load modules
var mysql = require('mysql');
var fs = require('fs');

//laat config bestanden
var fileLocation = JSON.parse(fs.readFileSync('./config/fileLocation.txt')).fileLocation;

//load codes
var ConsoleColor = require(fileLocation+'/ConsoleColor.js');
var ConfigGetter = require(fileLocation+'/configGetter.js');

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
exports.ordersSqlQuery = function(reqData, ip, res){
    
    console.log(reqData);
    MYSQLConnection.query(reqData, function (error, results, fields) {
        // error will be an Error if one occurred during the query 
        // results will contain the results of the query 
        // fields will contain information about the returned results fields (if any) 
        if(error){
            console.log(error);
        } else {
            console.log("results "+results);
            console.log("fields "+ fields);
            
            res.send(fields);
        }
    });
};

exports.ordersGetList = function(sql, ip) {
    
    
    
};

console.log(ConsoleColor.log()+"Orders.js is beschikbaar.");