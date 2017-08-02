var app = require('express')();
var server = require('http').Server(app);
// var mysql =require('mysql');
var bodyParser= require('body-parser');
// var connection= require('express-myconnection');
var user = require('./routes/user');
var project = require('./routes/project');
var io = require('socket.io')(server);
var label = require('./routes/label');

// app.io = io;
var port = 8000;
app.use(bodyParser.urlencoded({ extended : true }));
app.use('/user',user);
app.use('/project',project);
app.use('/label',label);
app.use(function(req, res , next){
    res.header("access-control-allow-methods","GET,POST,PUT");
    res.header("content-Type","application/json");
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With , Content-Type , Accept");
    next();
});
var sockets = [];
io.on('connection', function(socket){
    var handshakeData = socket.request;
    sockets[handshakeData._query['username']] = socket.idea;
    // console.log("handshake");

socket.on('chat message', function(msg){
  io.emit('chat message', msg);
  // console.log("handshakeeeeee");
});
});
// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });
// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });
server.listen(port , function(){
  console.log('hello app.js'+port);
});
module.exports = app;
