//load modules
var fs = require('fs');

//save file location
fs.writeFile("./config/fileLoaction.txt", JSON.stringify({file: __dirname}));