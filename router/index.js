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
var Orders = require(fileLocation+'/router/Orders.js');
var updateBalance = require(fileLocation+'/router/updateBalance.js');
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
Router.post('/updatebalance', function(req, res){
    
    //get ips
    var ip = GetIpAddress.ipAddress(req);
    console.log(req.body)
   
    //kijk of balance tabel van het ip adres al bestaat
    MYSQLConnection.query("SHOW TABLES LIKE 'balance';", function (err, resulttwo) {
        if (err) {
            console.error(ConsoleColor.error()+"Probleem bij kijken welk ip's tabels als die er zijn. Het is bij updateBalance.js de error.");
            return false;
        } else {
            console.log(ConsoleColor.log()+"Tabel check is uitgevoerd.");
    
            //req data
            var reqData = req.body;
            console.log(reqData)
            //kijk naar de gekijken data
            if(resulttwo.length == 0){
                //maak tabel aan
                mysqlCreatTabel(reqData);
            } else {
                //start data verwerker
                console.log(reqData)
                dataVerwerkenBittrex(reqData);
            }
        }
    });
    
    //data verwerken bittre
    function dataVerwerkenBittrex(reqData){

        //for loop
        //var tempData = JSON.parse(reqData);
        var tempData = reqData;
        //console.log(reqData)
        var i = 0;
        for (;tempData[i];) {

            var raw_data = JSON.parse(tempData[i]);

            var data = {
                coin: raw_data.coin,
                balance: raw_data.balance,
                available: raw_data.available,
                pending: raw_data.pending,
                exchange: 'bittrex',
                ip: ip
            };

            bittrexMysql(data);
            i++;
        }
    };
    
    //bitrtrex mysql function
    function bittrexMysql (data){
    
        //count sql zodat je weet of je data moet update of toevoegen
        var countSql = "SELECT count(*) AS count FROM `cryptoData`.`balance`"
                +" WHERE  coin='"+data.coin+"' AND handelsplaats='"+ data.exchange+"' AND ip='"+data.ip+"'";

        //voer query uit
        MYSQLConnection.query(countSql, function (err, result) {
            if (err) {
                console.error(ConsoleColor.error()+"Probleem bij data optellen. Het probleem is bij updateBalance.");
                return false;
            } else {
                console.log(ConsoleColor.log()+"Count query is gedaan.");

                //de juiste query runnen
                if(result[0].count > 0){

                    //sql
                    var sql = "UPDATE balance SET balance="+data.balance+", pending="+data.pending+", available="+data.available + 
                            " WHERE coin='"+data.coin +"' AND handelsplaats='"+ data.exchange+"' AND ip='"+data.ip+"'";

                    //voor de query uit
                    MYSQLConnection.query(sql, function (err) {
                        if (err) {
                            console.error(ConsoleColor.error()+"Probleem bij updaten balance. Dit is bij udpateBalance.js.");
                            return false;
                        } else {
                            console.log(ConsoleColor.log()+"Balence geupdate.");
                            return true;
                        }
                    });
                } else {

                    //sql
                    var sql = "INSERT INTO balance (handelsplaats, coin, balance, available, pending, ip) "+
                            "VALUES ('"+data.exchange+"', '"+data.coin+"', "+data.balance+", "+data.available+", "+data.pending+", '"+data.ip+"');";

                    //voor de query uit
                    MYSQLConnection.query(sql, function (err) {
                        if (err) {
                            console.error(ConsoleColor.error()+"Probleem bij data toevoegen bij balance tabel. Dit is bij updateBalance.js.");
                            return false;
                        } else {
                            console.log(ConsoleColor.log()+"Data is geupdate.");
                            return true;

                        }
                    });
                }
            }
        });
    }
    
    //creat tabel als die nog niet bestaat
    function mysqlCreatTabel(reqData){
    
        //sql
        var sql = "CREATE TABLE `cryptoData`.`balance` ("
            +"`handelsplaats` VARCHAR(45) NOT NULL,"
            +"`coin` VARCHAR(45) NOT NULL,"
            +"`balance` INT NOT NULL,"
            +"`available` INT NOT NULL,"
            +"`pending` INT NOT NULL,"
            +"`ip` VARCHAR(45) NOT NULL,"
            +"PRIMARY KEY (`handelsplaats`, `coin`, `ip`));";

        //voor de query uit
        MYSQLConnection.query(sql, function (err, resulttwo) {
            if (err) {
                console.error(err);
                console.error(ConsoleColor.error()+"Probleem bij data toe tevoegen bij balance tabel. Dit probleem is bij updateBalance.js.");
                return false;
            } else {
                console.log(ConsoleColor.log()+"Tabel is toegevoegd.");
                dataVerwerkenBittrex(ip, reqData);
            }
        })
    };
});


Router.post('/Orders', function(req, res){
    
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






//export Router
module.exports = Router;