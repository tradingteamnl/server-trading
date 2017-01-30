//load modules
var mysql = require('mysql');
var fs = require('fs');

//laat config bestanden
var fileLoaction = JSON.parse(fs.readFileSync('./config/fileLoaction.txt'));
var config = JSON.parse(fs.readFileSync('./config.json'));

//load codes
var ConsoleColor = require(fileLoaction.file+'/ConsoleColor.js');

//connection
var MYSQLConnection = mysql.createConnection({
    host     : config.mysql.host,
    user     : config.mysql.user,
    password : config.mysql.password,
    database : config.mysql.DBName
});

//connectie maken met mysql
MYSQLConnection.connect(function(err){
    if(err){
        console.error(ConsoleColor.error()+err);
    } else {
        console.log(ConsoleColor.log()+"Connectie met mysql.");
    }
});

//function
exports.updateBalance = function(reqData, ip){
    
    //kijk of balance tabel van het ip adres al bestaat
    MYSQLConnection.query("SHOW TABLES LIKE '"+ip+"';", function (err, resulttwo) {
        if (err) {
            console.error(ConsoleColor.error()+"Probleem bij kijken welk ip's tabels als die er zijn. Het is bij updateBalance.js de error.");
            
        } else {
            console.log(ConsoleColor.log()+"Tabel check is uitgevoerd.");
            
            //kijk naar de gekijken data
            if(resulttwo.length == 0){
                //maak tabel aan
                mysqlCreatTabel(ip, reqData);
            } else {
                //start data verwerker
                dataVerwerkenBittrex(ip, reqData);
            }
            
        }
    });
};

/**
 * 
 * @param {type} ip
 * @param {type} reqData
 * @returns {undefined}
 */
function dataVerwerkenBittrex(ip, reqData){

    //for loop
    var tempData = JSON.parse(reqData);
    var i = 0;
    for (;tempData[i];) {
        
        var raw_data = JSON.parse(tempData[i]);
        
        var data = {
            coin: raw_data.coin,
            balance: raw_data.balance,
            available: raw_data.available,
            pending: raw_data.pending,
            exchange: 'bittrex'
        };
        
        bittrexMysql(ip, data);
        i++;
    }
}


//function bittrex mysql
function bittrexMysql (ip, data){
    
    //count sql zodat je weet of je data moet update of toevoegen
    var countSql = "SELECT count(*) AS count FROM `cryptoData`.`"+ip+"` WHERE  coin='"+data.coin+"'";
    
    //voer query uit
    MYSQLConnection.query(countSql, function (err, result) {
        if (err) {
            console.error(ConsoleColor.error()+"Probleem bij data optellen. Het probleem is bij updateBalance.");
        } else {
            console.log(ConsoleColor.log()+"Count query is gedaan.");
            
            //de juiste query runnen
            if(result[0].count > 0){
                
                //sql
                var sql = "UPDATE "+ip+" SET balance="+data.balance+", pending="+data.pending+", available="+data.available + 
                        " WHERE coin='"+data.coin +"' AND handelsplaats='"+ data.exchange+"'";

                //voor de query uit
                MYSQLConnection.query(sql, function (err) {
                    if (err) {
                        console.error(ConsoleColor.error()+"Probleem bij updaten balance. Dit is bij udpateBalance.js.");
                    } else {
                        console.log(ConsoleColor.log()+"Balence geupdate.");

                    }
                });
            } else {
                
                //sql
                var sql = "INSERT INTO "+ip+" (handelsplaats, coin, balance, available, pending) "+
                        "VALUES ('"+data.exchange+"', '"+data.coin+"', "+data.balance+", "+data.available+", "+data.pending+");";
                //voor de query uit
                MYSQLConnection.query(sql, function (err) {
                    if (err) {
                        console.error(ConsoleColor.error()+"Probleem bij data toevoegen bij balance tabel. Dit is bij updateBalance.js.");
                    } else {
                        console.log(ConsoleColor.log()+"Data is geupdate.");

                    }
                });
            }
        }
    });
}

/**
 * Mysql maak balance tabel aan
 * 
 * @returns true of false
 */
function mysqlCreatTabel(ip, reqData){
    
    //sql
    var sql = "CREATE TABLE `cryptoData`.`"+ip+"` ("
        +"`handelsplaats` VARCHAR(45) NOT NULL,"
        +"`coin` VARCHAR(45) NOT NULL,"
        +"`balance` INT NOT NULL,"
        +"`available` INT NOT NULL,"
        +"`pending` INT NOT NULL,"
        +"PRIMARY KEY (`handelsplaats`, `coin`));";
    
    //voor de query uit
    MYSQLConnection.query(sql, function (err, resulttwo) {
        if (err) {
            console.error(err);
            console.error(ConsoleColor.error()+"Probleem bij data toe tevoegen bij balance tabel. Dit probleem is bij updateBalance.js.");
        } else {
            console.log(ConsoleColor.log()+"Tabel is toegevoegd.");
            dataVerwerkenBittrex(ip, reqData);
        }
    });
}

//console masseage
console.log(ConsoleColor.log()+"Update balance is beschikbaar.");