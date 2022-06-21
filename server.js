const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var users = 0;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  users += 1;
  io.emit('users',users);
  console.log(`a user connected there is now ${users} users`);

  socket.on('disconnect', function () {

      users = users - 1;
      io.emit('users',users);
      console.log(`a user disconnected there is now ${users} users`);

  });
});

let userPos = [];
io.httpServer.on('listening', function () {
  console.log('listening on port', io.httpServer.address().port)
})
io.on('update',arg=>{
  console.log(arg)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/Coin.js', (req, res) => {
  res.sendFile(__dirname + '/Coin.js');
});
app.get('/Level.js', (req, res) => {
  res.sendFile(__dirname + '/Level.js');
});
app.get('/LevelSetupFunction.js', (req, res) => {
  res.sendFile(__dirname + '/LevelSetupFunction.js');
});
app.get('/Line.js', (req, res) => {
  res.sendFile(__dirname + '/Line.js');
});
app.get('/Music.js', (req, res) => {
  res.sendFile(__dirname + '/Music.js');
});
app.get('/Population.js', (req, res) => {
  res.sendFile(__dirname + '/Population.js');
});
app.get('/bullet.js', (req, res) => {
  res.sendFile(__dirname + '/bullet.js');
});
app.get('/Player.js', (req, res) => {
  res.sendFile(__dirname + '/Player.js');
});
app.get('/sketch.js', (req, res) => {
  res.sendFile(__dirname + '/sketch.js');
});
app.get('/Brain.js', (req, res) => {
  res.sendFile(__dirname + '/Brain.js');
});
app.use('/public', express.static(__dirname + '/public'));
app.use('/libraries', express.static(__dirname + '/libraries'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/sounds', express.static(__dirname + '/sounds'));

server.listen(5000)