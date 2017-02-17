//load modules
var express = require('express');
var fs = require('fs');

//app
var app = express();

//laat console color
var ConsoleColor = require('./ConsoleColor.js');

//laat requires
require('./bittrex/bittrexMarketRequest.js');
//require('./core/berekenGemiddelde.js');
//require('./coinbase/CoinbaseMarketRequest');

//routers
//api routers
app.use('/api', require('./router/index.js'));
/*
 app.use('/api/updatebalance', require('./router/updateBalance.js'));
//informatie getter
app.use('/api/getbalance', require(fileLocation+'/router/GetBalance.js'));
*/
app.use('/api', require('./router/index.js'));

//great server
app.listen(8081, function(){
    console.log(ConsoleColor.log()+"Server is aan.");
});