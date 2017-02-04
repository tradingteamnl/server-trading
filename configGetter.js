//load modules
var fs = require('fs');

//krijg de fileLocation
var fileLocation = JSON.parse(fs.readFileSync("./config/fileLocation.txt")).fileLocation;

//laat config
var config = JSON.parse(fs.readFileSync(fileLocation+"/config.json"));

//loaat andere bestanden
var dag = require(fileLocation+'/scripts/Dag.js');
var tijd = require(fileLocation+'/scripts/Tijd.js');

/* ================= GET API URL ===================  */
//Coinbase url
exports.coinbaseURLv2 = function(){
    return config.requestURL.coinbase.v2;
};

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

/* ============== MYSQL COLLECT ============== */
exports.MysqlCreatConnection = function(){
    
    //kijk in welekle modes is geactiveerd
    if(config.developerModes == true) {
        
        //verzamel data
        var createConnectionMysql = mysql.createConnection({
            host     : config.mysqlDeveloperDatabase.host,
            user     : config.mysqlDeveloperDatabase.user,
            password : config.mysqlDeveloperDatabase.password,
            database : config.mysqlDeveloperDatabase.DBName
        });
        
        return createConnectionMysql;
    } else {
        
        //verzamel data
        var createConnectionMysql = mysql.createConnection({
            host     : config.mysql.host,
            user     : config.mysql.user,
            password : config.mysql.password,
            database : config.mysql.DBName
        });
        
        return createConnectionMysql;
    }
};