//load modules
var fs = require('fs');

//save file location
fs.writeFile("./config/fileLocation.txt", JSON.stringify({
    file: __dirname,
    fileLocation: __dirname
}));

//dir path
var dir = __dirname+'/temp';

//kijk of folder bestaat
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}