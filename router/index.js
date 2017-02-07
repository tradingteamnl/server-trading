//load modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

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

//Router.post
//update balance
Router.post('/updatebalance', function(req, res){
    
    //load updatebalance function terugKoppeling
    var terugKoppeling = updateBalance.updateBalance(JSON.stringify(req.body), GetIpAddress.ipAddress(req));
    
    //kijk om te kijken of het succes vol is gelukt
    if(terugKoppeling == true){
        res.send('true');
    } else {
        res.send('false');
    }
});

//app.use
app.use('/updatebalance', require(fileLocation+'/router/Orders.js'));
app.use('/ordersSqlQuery', require(fileLocation+'/router/updateBalance.js'));

module.exports = app;