//load modules
var request = require('request');
var fs = require('fs');
var mysql = require('mysql');

//bestand locatie op de pc
var autoConfig = JSON.parse(fs.readFileSync('./config/fileLocation.txt'));
var fileLocation = autoConfig.fileLocation;

//load require
var configGetter = require(fileLocation+'/configGetter.js');
var ConsoleColor = require(fileLocation+'/ConsoleColor.js');
var Time = require(fileLocation+'/Time.js');

//config
var config = JSON.parse(fs.readFileSync(fileLocation+"/config.json"));

//connection
var MYSQLConnection = mysql.createConnection(configGetter.MysqlCreatConnection());

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

            //bereken btc handels volume
            var btcHandelsVolume = marktData[i].Volume * marktData[i].low;

            //get alle data
            var data = {
                'Markt': tradeMarket,
                'High': marktData[i].High,
                'Low': marktData[i].Low,
                'Volume': marktData[i].Volume,
                'VolumeBTC': btcHandelsVolume,
                'Bid': marktData[i].Bid,
                'Ask': marktData[i].Ask,
                'OpenBuyOrders': marktData[i].OpenBuyOrders,
                'OpenSellOrders': marktData[i].OpenSellOrders
            };

            //even kijken of alle data beschikbaar is
            if(data.High != null && data.Low != null && data.Volume != null && data.Bid != null && data.Ask != null && data.OpenBuyOrders != null && data.OpenSellOrders != null){
                //INSERT INFO QUARY
                var INSERTINFOQuary = "INSERT INTO `cryptoData`.`bittrexmarktdata` (`Markt`, `High`, `Low`, `Volume`, `Bid`, `Ask`, `OpenBuyOrders`, `OpenSellOrders`, `Datum`, `Time`, `VolumeBTC`)"
                    + "VALUES ('" + data.Markt + "','" + data.High + "', '" + data.Low + "', '" + data.Volume 
                    + "', '" + data.Bid + "', '" + data.Ask +  "', '" +data.OpenBuyOrders + "', '" + data.OpenSellOrders + "', '"+Time.dag()+"', '"+Time.time()+"', '"+data.VolumeBTC+"')";

                //query
                MYSQLConnection.query(INSERTINFOQuary, function (err) {
                    if (err) {
                        console.log(err);
                        console.error(ConsoleColor.error()+"Probleem bij data naar bittrexmarktdata te pushen.");
                    } else {
                        console.log(ConsoleColor.log()+"Data in bittrex gezet.");
                    }
                });
            } else {
                
                //hier kan nog een error systeem komen als je wilt
                
            }
        }
    }
}

//Time reload
setInterval(function() {
    request(options, callback);
}, 60000);

console.log(ConsoleColor.log()+"Bittrex market request.");