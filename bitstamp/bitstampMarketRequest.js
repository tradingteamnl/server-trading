//load modules
var request = require('request');
var fs = require('fs');
var mysql = require('mysql');

//bestand locatie op de pc
var autoConfig = JSON.parse(fs.readFileSync('./config/fileLocation.txt'));
var fileLocation = autoConfig.fileLocation;

//load require
var ConfigGetter = require(fileLocation+'/configGetter.js');
var ConsoleColor = require(fileLocation+'/ConsoleColor.js');
var Time = require(fileLocation+'/Time.js');

//config
var config = JSON.parse(fs.readFileSync(fileLocation+"/config.json"));

//connection
var MYSQLConnection = mysql.createConnection(ConfigGetter.MysqlCreatConnection());

//options
var optionsbtcusd = {
  url: 'https://www.bitstamp.net/api/v2/ticker/btcusd/',
  headers: {
    'User-Agent': 'request'
  }
};

var optionsbtceuro = {
  url: 'https://www.bitstamp.net/api/v2/ticker/btceur/',
  headers: {
    'User-Agent': 'request'
  }
};

//connectie maken met mysql
MYSQLConnection.connect(function(err){
    if(err){
        console.error(ConsoleColor.error()+err);
    } else {
        console.log(ConsoleColor.log()+"Connectie met mysql. Dit is bij bitstamp.js.");
    }
});

//callback
function callbackbtcusd(error, response,body) {
    if (error) {
        console.error(ConsoleColor.error()+"Probleem bij opvragen markt data van bitstmap btc-usd.");
    } else {
        
        //MarktData
        var marktData = JSON.parse(body);

        //get alle data
        var data = {
            'Markt': "BTC-USD",
            'High': marktData.high,
            'Low': marktData.low,
            'VolumeBTC': marktData.volume,
            'Bid': marktData.bid,
            'Last': marktData.last,
            'Ask': marktData.ask
        };

        //even kijken of alle data beschikbaar is
        if(data.High != null && data.Low != null && data.VolumeBTC != null && data.Bid != null && data.Ask != null  && data.Last != null){
            //INSERT INFO QUARY
            var INSERTINFOQuary = "INSERT INTO `"+ConfigGetter.mysqlDBName()+"`.`bitstampmarktdata` (`Markt`, `High`, `Low`, `Bid`, `Ask`, `Datum`, `Time`, `VolumeBTC`, `Last`)"
                + "VALUES ('" + data.Markt + "','" + data.High + "', '" + data.Low + "', '" + data.Bid + "', '"
                + data.Ask +  "', '"+Time.dag()+"', '"+Time.time()+"', '"+data.VolumeBTC+"', '" + data.Last + "')";

            //query
            MYSQLConnection.query(INSERTINFOQuary, function (err) {
                if (err) {
                    console.log(err)
                    console.error(ConsoleColor.error()+"Probleem bij data naar bitstampmarktdata te pushen.");
                } else {
                    console.log(ConsoleColor.log()+"Data in bistamp gezet.");
                }
            });
        } else {

            //hier kan nog een error systeem komen als je wilt

        }
    }
}

//callback
function callbackbtceuro(error, response,body) {
    if (error) {
        console.error(ConsoleColor.error()+"Probleem bij opvragen markt data van bitstmap btc-euro.");
    } else {
        
        //MarktData
        var marktData = JSON.parse(body);

        //get alle data
        var data = {
            'Markt': "BTC-EURO",
            'High': marktData.high,
            'Low': marktData.low,
            'VolumeBTC': marktData.volume,
            'Bid': marktData.bid,
            'Last': marktData.last,
            'Ask': marktData.ask
        };

        //even kijken of alle data beschikbaar is
        if(data.High != null && data.Low != null && data.VolumeBTC != null && data.Bid != null && data.Ask != null  && data.Last != null){
            //INSERT INFO QUARY
            var INSERTINFOQuary = "INSERT INTO `"+ConfigGetter.mysqlDBName()+"`.`bitstampmarktdata` (`Markt`, `High`, `Low`, `Bid`, `Ask`, `Datum`, `Time`, `VolumeBTC`, `Last`)"
                + "VALUES ('" + data.Markt + "','" + data.High + "', '" + data.Low + "', '" + data.Bid + "', '"
                + data.Ask +  "', '"+Time.dag()+"', '"+Time.time()+"', '"+data.VolumeBTC+"', '" + data.Last + "')";

            //query
            MYSQLConnection.query(INSERTINFOQuary, function (err) {
                if (err) {
                    console.error(ConsoleColor.error()+"Probleem bij data naar bitstampmarktdata te pushen.");
                } else {
                    console.log(ConsoleColor.log()+"Data in bistamp gezet.");
                }
            });
        } else {

            //hier kan nog een error systeem komen als je wilt

        }
    }
}


//Time reload
setInterval(function() {
    request(optionsbtcusd, callbackbtcusd);
    request(optionsbtceuro, callbackbtceuro);
}, 60000);
console.log(ConsoleColor.log()+"Bittrex market request.");