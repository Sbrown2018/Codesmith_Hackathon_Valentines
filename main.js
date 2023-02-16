// This file is where we need to deploy connections and requestcosn
//const io = require("/socket.io/socket.io.js"); // what is this path?
// const io = require("https://cdn.socket.io/4.5.4/socket.io.min.js"); // importing through CDN
// import io from "/socket.io/socket.io.js";
// const socket = io();


// console.log(socket);

// fetch('http://localhost:3000/socket.io/socket.io.js', {mode: 'no-cors' })
//   .then(res => {
//     console.log('in then');
//     console.log(res);
//     // const socket = res();
//   })
//   .then((io) => {
//     console.log(io);
//   })

// (async () => {
//   const io = await fetch('http://localhost:3000/socket.io/socket.io.js', {mode: 'no-cors' });
//   // const socket = io();

//   console.log('this is io', io);
//   console.log('this is socket', socket);
// })()

// These messages should be sent to someone random (who is also using the extension)
// function messageGenerator() {
//   //post

// }

// once a user clicks a button on this extension 1) first time users would need to be added to a database to keep track of who can be poked. We can use local storage to save IP addresses to identify users

// 2)  we need to auto connect to the server - use an event listener/ mount function

// TLDR: automatic connection to server when extension is open (user can still choose to deactivate the extension). Then when extension button is clicked, a message is sent (post request) to a random fellow extension user


document.addEventListener('DOMContentLoaded', () => {
  
  console.log('hi in MAIN.js');
})


// const script = document.createElement('script');
// // // '/socket.io/socket.io.js'
// script.createAttribute('src')



// Create a new script element
// const script = document.createElement('script');

// // Set the src attribute to the socket.io.js file
// script.src = 'http://localhost:3000/socket.io/socket.io.js';
// script.async = true;

// // Append the script element to the document's head element
// document.head.appendChild(script);

// // Wait for the script to load
// console.log('before onload');
// script.onload = function(e) {
//   console.log(e);
//   console.log('loaded')
//   // Create a new socket connection
//   console.log(script.src);
//   const socket = io();
//   console.log('this is socket', socket)
// };




