//load modules
var express = require('express');
var bodyParser = require('body-parser');

//router
var Router = express.Router();

//Router.use
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({ extended: true }));

//load modules
var updateBalance = require('./updateBalance.js');

Router.post('/updatebalance', function(req, res){
    
    //req data
    var reqData = req.body;
    /*var rawIp = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    
    //kijk welke ip adres versie er is
    console.log(rawIp.substring(0,7));
    if (rawIp.substring(0, 7) == "::ffff:") {
        
        //het begin van ipv4 er waf slopen
        var ip = "ip"+rawIp.substring(7);
        console.log(ip);
    }*/
    var ip = "ip1";
    
    //load updatebalance function terugKoppeling
    var terugKoppeling = updateBalance.updateBalance(JSON.stringify(reqData), ip);
    
    //kijk om te kijken of het succes vol is gelukt
    if(terugKoppeling == true){
        res.send('true');
    } else {
        res.send('false');
    }
});

module.exports = Router;