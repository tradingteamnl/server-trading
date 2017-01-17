//load modules
var request = require('request');
var fs = require('fs');
var mysql = require('mysql');

//load require
var ConsoleColor = require('../ConsoleColor.js');
var Time = require('../Time.js');

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

//connectie maken met mysql
MYSQLConnection.connect(function(err){
    if(err){
        console.error(ConsoleColor.error()+err);
    } else {
        console.log(ConsoleColor.log()+"Connectie met mysql.");
    }
});

//callback
function callback(error, response,body) {
    if (error) {
        console.error(ConsoleColor.error()+"Probleem bij opvragen markt data van bittrex.");
    } else {
        
        
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
                    'Markt': tradeMarket,
                    'High': marktData[i].High,
                    'Low': marktData[i].Low,
                    'Volume': marktData[i].Volume,
                    'Bid': marktData[i].Bid,
                    'Ask': marktData[i].Ask,
                    'OpenBuyOrders': marktData[i].OpenBuyOrders,
                    'OpenSellOrders': marktData[i].OpenSellOrders
                };

                var INSERTINFOQuary = "INSERT INTO `cryptoData`.`bittrexmarktdata` (`Markt`, `High`, `Low`, `Volume`, `Bid`, `Ask`, `OpenBuyOrders`, `OpenSellOrders`, `Datum`, `Time`)"
                    + "VALUES ('" + data.Markt + "','" + data.High + "', '" + data.Low + "', '" + data.Volume 
                    + "', '" + data.Bid + "', '" + data.Ask +  "', '" +data.OpenBuyOrders + "', '" + data.OpenSellOrders + "', '"+Time.dag()+"', '"+Time.time()+"')";
                
                
                MYSQLConnection.query(INSERTINFOQuary, function (err, result) {
                    if (err) {
                        console.log(err);
                        console.error(ConsoleColor.error()+"Probleem bij data naar bittrexmarktdata te pushen.");
                    } else {
                        console.log(ConsoleColor.log()+"Data in bittrex gezet.");
                    }
                });   
            }
        }
    }
}

//Time reload
setInterval(function() {
    request(options, callback);
}, 60000);

console.log(ConsoleColor.log()+"Bittrex market request.");