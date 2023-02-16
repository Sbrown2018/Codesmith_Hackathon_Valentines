
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

const { Server } = require("socket.io");
const io = new Server(server); // a wrapper for express
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

app.get('/', (req, res) => { // serves up the button.html
  res.sendFile(__dirname + '/button.html');
});

io.on('connection', (socket) => { // establishes the initil socket connection
  console.log(socket.id, 'has connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});







