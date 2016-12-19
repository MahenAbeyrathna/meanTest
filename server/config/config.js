var path= require('path');
var rootPath = path.normalize(__dirname +'/../../');

module.exports ={
    development:{
        db:'mongodb://localhost/meanproject',
        rootPath:rootPath,
        port: process.env.PORT || 3030
    },
    production:{
        db:'mongodb://mahen:123@ds163397.mlab.com:63397/meanproject',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}