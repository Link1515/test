const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  const userId = Date.now().toString(16);
  console.log(`user_${userId} connected`);
  io.emit('chat message', `user_${userId} 加入聊天室`);

  socket.on('chat message', (msg) => {
    console.log(`message from user_${userId}: ${msg}`);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log(`user_${userId} disconnect`);
    io.emit('chat message', `user_${userId} 離開聊天室`);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
