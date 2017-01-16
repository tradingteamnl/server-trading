//load modules
var request = require('request');
var fs = require('fs');
var mysql = require('mysql');
var async = require('async');

//load require
var ConsoleColor = require('../ConsoleColor.js');

//config
var config = JSON.parse(fs.readFileSync("./config.json"));

//connection
var MYSQLConnection = mysql.createConnection({
  host     : config.mysql.host,
  user     : config.mysql.user,
  password : config.mysql.password,
  database : config.mysql.DBName
});

//options
var options = {
  url: 'https://bittrex.com/api/v1.1/public/getmarketsummaries',
  headers: {
    'User-Agent': 'request'
  }
};

//callback
function callback(error, response,body) {
    if (error) {
        console.error(ConsoleColor.error()+"Probleem bij opvragen markt data van bittrex.");
    } else {
        
        var totalMemoryDB= {};
        
        //MarktData
        var marktData = JSON.parse(body).result;
        
        //loop om alle data om te zetten naar makkelijker sorteer moment
        for (i = 0; i < marktData.length; i++) { 
            
            //trade market
            var tradeMarket = marktData[i].MarketName;
            
            //if loop
            if(tradeMarket.substring(0,4) == "BTC-"){
                
                //get cointags
                var coinTag = tradeMarket.substring(4);
                
                //get alle data
                var data = {
                    'Exchange': 'bittrex',
                    'High': marktData[i].High,
                    'Low': marktData[i].Low,
                    'Volume': marktData[i].Volume,
                    'Bid': marktData[i].Bid,
                    'Ask': marktData[i].Ask,
                    'OpenBuyOrders': marktData[i].OpenBuyOrders,
                    'OpenSellOrders': marktData[i].OpenSellOrders
                };
                
                totalMemoryDB[coinTag] = data;
            }
        }
    }
}

//reuqest
request(options, callback);

//async
async.series([
    
    //MYSQL CONNECTION
    function(callback) {
        
        //connectie maken met mysql
        MYSQLConnection.connect(function(err){
            if(err){
                console.error(ConsoleColor.error()+err);
            } else {
                console.log(ConsoleColor.log()+"Connectie met mysql.");
            }
        });
    },
    function(callback) {
        
    },
    
    //MYSQL CONNECTION
    function(callback) {
        //MYSQL close connection
        MYSQLConnection.end(function(err){
            if(err){
                console.error(ConsoleColor.error()+"Kan mysql connentie niet opsluiten..");
            } else {
                console.log(ConsoleColor.log()+"Mysql connectie is afgesloten.");
            };
        });
    }
],
// optional callback
function(err, results) {
    if(err){

    } else {
        console.log(ConsoleColor.log()+"Series schakeling bij MarktDataVerwerker gedaan.");
    }
});

//String INSERTINFOQuary = "INSERT INTO `corendonbagagesystem`.`gevondenbagage` (`bagagelabel`, `kleur`, `dikte`, `lengte`, `breedte`, `luchthavengevonden`, `datum`, `bijzonderhede`, `merk`, `softhard`, status)"
//                            + "VALUES ('" + InputBagageNummer.getText() + "','" + kofferKleur + "', '" + dikteKoffer + "', '" + lengteKoffer + "', '" + breedteKoffer + "', '" + locatieKoffer + "', CURDATE(), '" + Bijzonderheden.getText() + "', '" + merkKoffer + "', '" + softHardCase + "', 'notSolved')";
                        