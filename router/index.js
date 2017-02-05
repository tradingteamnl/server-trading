//load modules
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

//router
var Router = express.Router();

//Router.use
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));

//krijg de filelocation
var fileLocation = JSON.parse(fs.readFileSync('./config/fileLocation.txt')).fileLocation;

//load modules
var updateBalance = require(fileLocation+'/router/updateBalance.js');
var GetIpAddress = require(fileLocation+'/scripts/IpAddress.js');

//Router.post
Router.post('/updatebalance', function(req, res){
    
    //req data
    var reqData = req.body;
    
    //load updatebalance function terugKoppeling
    var terugKoppeling = updateBalance.updateBalance(JSON.stringify(reqData), GetIpAddress.ipAddress(req));
    
    //kijk om te kijken of het succes vol is gelukt
    if(terugKoppeling == true){
        res.send('true');
    } else {
        res.send('false');
    }
});

module.exports = Router;