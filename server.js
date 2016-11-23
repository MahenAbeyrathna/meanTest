var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env =process.env.NODE_ENV= process.env.NODE_ENV || 'development';
var app= express();
function compile(str,path){
    return stylus(str).set('filename',path);
}
app.set('views', __dirname + '/server/views');
app.set('view engine','jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
    {
        src: __dirname +'/public',
        compile: compile
    }
));
app.use(express.static(__dirname + '/public'));
//mongoose.Promise = global.Promise;
if( env != 'development'){
    mongoose.connect('mongodb://mahen:123@ds163397.mlab.com:63397/meanproject');
}
else{
    mongoose.connect('mongodb://localhost/meanproject');
}
//mongoose.set('debug', true);
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error...'));
db.once('open',function callback(){
    console.log('meanproject db opended');
});
var messageSchema= mongoose.Schema({message:String});
var Message = mongoose.model('Message',messageSchema);
var mongoMessage;
Message.findOne().exec(function(err,messageDoc){
    if(messageDoc)
    {
        mongoMessage=messageDoc.message;
        console.log('success:',mongoMessage);

    }
    else {
        console.log('erro:',err);
    }
});

app.get('/partials/:partialPath',function (req,res) {
    res.render('partials/'+ req.params.partialPath);
});

app.get('*',function (req,res) {
    res.render('index',{
        mongoMessage : mongoMessage
    });
});
var port= process.env.PORT || 3030;
app.listen(port);
console.log('Listing to the port'+port+ "...");
