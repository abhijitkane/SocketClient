var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('window.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('get',function(msg) {
  	console.log("GET: "+msg);
  });
});

http.listen(1337, function(){
  console.log('listening on *:1337');
});