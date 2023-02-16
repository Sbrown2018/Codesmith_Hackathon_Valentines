
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

// const { Server } = require("socket.io");
// const io = new Server(server); // a wrapper for express
const io = require('socket.io')(server, {
  cors: {
      origin: "*",
      methods: ["GET", "POST"],
      transports: ['websocket', 'polling'],
      credentials: true
  },
  allowEIO3: true
});
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

app.get('/', (req, res) => { // serves up the button.html
  res.sendFile(__dirname + '/button.html');
});

io.on('connection', (socket) => { // establishes the initil socket connection
  socket.join("room");
  socket.to("room").emit("poke", () => {
    console.log('joiined the room and poke was triggered')
  });

  console.log(socket.id, 'has connected');
  console.log(io.engine.clientsCount);



  socket.on("disconnect", () =>{
    console.log("d/c", socket.id);
  })

  socket.on('poke', () => {
    // io.in('room').clients((err , clients) => {
    //   // clients will be array of socket ids , currently available in given room
    //   console.log('clients array', clients);
    // });
    // console.log('array?', io.fetchSockets())
    console.log('poked by', id)
    console.log("Hello")
    
    // iterate thru array of current cxns, randomly choose one
    // server.emit to that id and you've randomly been poked
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});







