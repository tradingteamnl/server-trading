//load modules
var fs = require('fs');

//laat autoconfig
var autoConfig = JSON.parse(fs.readFileSync("./autoConfig.json"));

//laat config
var config = JSON.parse(fs.readFileSync("./config.json"));

//get filelocation
exports.fileLocation = function(){
    return autoConfig.fileLocation;
};

/* ================== MYSQL ================== */
/* ============== MYSQL HOST ============== */
exports.mysqlHost = function(){
    return config.mysql.host;
};

/* ============== MYSQL USER ============== */
exports.mysqlUser = function(){
    return config.mysql.user;
};

/* ============== MYSQL PASSWORD ============== */
exports.mysqlPassword = function(){
    return config.mysql.password;
};

/* ============== MYSQL DBNAME ============== */
exports.mysqlDBName = function(){
    return config.mysql.DBName;
};