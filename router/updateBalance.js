//load modules
var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');
var fs = require('fs');

//Router
var Router = express.Router();
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({extended: true}));

//laat config bestanden
var fileLocation = JSON.parse(fs.readFileSync('./config/fileLocation.txt')).fileLocation;

//load codes
var ConsoleColor = require(fileLocation+'/ConsoleColor.js');
var GetIpAddress = require(fileLocation+'/scripts/IpAddress.js');
var configGetter = require(fileLocation+'/configGetter.js');

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

//function
Router.post('/', function(req, res){
    
    //get ips
    var ip = GetIpAddress.ipAddress(req);
    console.log("err "+req.body);
    //kijk of balance tabel van het ip adres al bestaat
    MYSQLConnection.query("SHOW TABLES LIKE 'balance';", function (err, resulttwo) {
        if (err) {
            console.error(ConsoleColor.error()+"Probleem bij kijken welk ip's tabels als die er zijn. Het is bij updateBalance.js de error.");
        } else {
            console.log(ConsoleColor.log()+"Tabel check is uitgevoerd.");
    
            //req data
            var reqData = req.body;
            
            //kijk naar de gekijken data
            if(resulttwo.length == 0){
                //maak tabel aan
                mysqlCreatTabel(reqData);
            } else {
                //start data verwerker
                dataVerwerkenBittrex(reqData);
            }
        }
    });
    
    //data verwerken bittre
    function dataVerwerkenBittrex(reqData){

        //for loop
        //var tempData = JSON.parse(reqData);
        var tempData = reqData.balanceData;
        var mac = reqData.mac;
        
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
                ip: ip,
                macadres: mac
            };

            bittrexMysql(data);
            i++;
        }
    };
    
    //bitrtrex mysql function
    function bittrexMysql (data){
    
        //count sql zodat je weet of je data moet update of toevoegen
        var countSql = "SELECT count(*) AS count FROM `cryptoData`.`balance`"
                +" WHERE  coin='"+data.coin+"' AND handelsplaats='"+ data.exchange+"' AND ip='"+data.ip+"' AND macadres='"+data.macadres+"';";

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
                            " WHERE coin='"+data.coin +"' AND handelsplaats='"+ data.exchange+"' AND ip='"+data.ip+"' AND macadres='"+data.macadres+"'";

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
                    var sql = "INSERT INTO balance (handelsplaats, coin, balance, available, pending, ip, macadres) "+
                            "VALUES ('"+data.exchange+"', '"+data.coin+"', "+data.balance+", "+data.available+", "+data.pending+", '"+data.ip+"', '"+data.macadres+"');";

                    //voor de query uit
                    MYSQLConnection.query(sql, function (err) {
                        if (err) {
                            console.error(ConsoleColor.error()+"Probleem bij data toevoegen bij balance tabel. Dit is bij updateBalance.js.");
                        } else {
                            console.log(ConsoleColor.log()+"Data is geupdate.");
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
            +"`mac` VARCHAR(45) NOT NULL,"
            +"PRIMARY KEY (`handelsplaats`, `coin`, `ip`, `mac`));";

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
        });
    };
});

//export Router
module.exports = Router;

//console masseage
console.log(ConsoleColor.log()+"Update balance is beschikbaar.");