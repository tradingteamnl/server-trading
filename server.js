//load modules
var express = require('express');
var fs = require('fs');

//app
var app = express();

//laat console color
var ConsoleColor = require('./ConsoleColor.js');

//laat requires
//require('./bittrex/bittrexMarketRequest.js');
require('./core/berekenGemiddelde.js');

//routers
app.use('/api', require('./router/index.js'));

//great server
app.listen(8080, function(){
    console.log(ConsoleColor.log()+"Server is aan.");
});