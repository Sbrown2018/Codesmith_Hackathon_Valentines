// const socket = require('./main.js');

// console.log('SOCKET: ', socket);


document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#send');
  console.log(button);
  button.onclick = () => {
    // send the message here using socketio client api
    console.log('you clicked me');
    //an alert as a hacky way to have a message appear
    alert("Roses are red. Violets are blue. There's a missing [ on line 32.")
  }

  console.log('hi in MAIN.js');
})




