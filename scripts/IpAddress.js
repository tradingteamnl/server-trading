//get ip address function
exports.ipAddress = function (req){
    
    
    //get ip address
    var rawIp = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    
    //kijk welke ip adres versie er is
    if (rawIp.substring(0, 7) == "::ffff:") {
        
        //het begin van ipv4 er waf slopen
        var ip = rawIp.substring(7);
        return ip;
    }
};