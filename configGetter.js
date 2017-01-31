//load modules
var fs = require('fs');

//laat autoconfig
var autoConfig = JSON.parse(fs.readFileSync("./config/fileLocation.txt"));
var fileLocation = autoConfig.fileLocation;

//laat config
var config = JSON.parse(fs.readFileSync("./config.json"));

//loaat andere bestanden
var dag = require(fileLocation+'/scripts/Dag.js');
var tijd = require(fileLocation+'/scipts/Tijd.js');

/* ====================== DAG ======================  */
exports.dag = function(){
    return dag.dag;
};

/* ====================== TIJD ======================  */
exports.tijd = function (){
    return tijd.tijd;
}

/* ================== FILELOCATION ================== */
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

/* ======= MYSQL DEVELOPER DATABSE ======= */
exports.mysqlDeveloperDatabaseHost = function(){
    return config.mysqlDeveloperDatabase.host;
};

/* ============== MYSQL USER ============== */
exports.mysqlDeveloperDatabaseUser = function(){
    return config.mysqlDeveloperDatabase.user;
};

/* ============== MYSQL PASSWORD ============== */
exports.mysqlDeveloperDatabasePassword = function(){
    return config.mysqlDeveloperDatabase.password;
};

/* ============== MYSQL DBNAME ============== */
exports.mysqlDeveloperDatabaseDBName = function(){
    return config.mysqlDeveloperDatabase.DBName;
};