//load modules
var express = require('express');

//app
var app = express();

//laat requires
require('./bittrex/bittrexMarketRequest.js');
var ConsoleColor = require('./ConsoleColor.js');


//great server
app.listen(8090, function(){
    console.log(ConsoleColor.log()+"Server is aan.");
});