//load modules
var express = require('express');
var fs = require('fs');

//app
var app = express();

//laat console color
var ConsoleColor = require('./ConsoleColor.js');

//laat requires
//require('./bittrex/bittrexMarketRequest.js');
//require('./core/berekenGemiddelde.js');
//require('./coinbase/CoinbaseMarketRequest');

var fileLocation = JSON.parse(fs.readFileSync('./config/fileLocation.txt')).fileLocation;

//routers
//api routers
//app.use('/api/ordersSqlQuery', require(fileLocation+'/router/Orders.js'));
app.use('/api', require('./router/index.js'));
app.use('/api/updatebalance', require('./router/updateBalance.js'));

//informatie getter
app.use('/api/getbalance', require(fileLocation+'/router/GetBalance.js'));

//great server
app.listen(8080, function(){
    console.log(ConsoleColor.log()+"Server is aan.");
});