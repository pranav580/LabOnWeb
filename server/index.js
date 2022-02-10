var app = require('express')();
// create the http server
var http = require('http').createServer(app);
// require the socket.io and bind it to a port 
var io = require('socket.io')(3005);

io.attach(http, {
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
 });
 io.on('connection', function (socket) {

  console.log('user connected');

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('message', function (msg) {
   console.log("message: "+msg);
  });
  timeout();
});

function timeout() {
  setTimeout(function () {
   io.emit('reply',"A message from server");
    timeout();
  }, 5000);
}

http.listen();













// const express = require('express');
// const app = express();
// const path = require("path");
// const fs = require("fs");
// var bodyParser = require('body-parser');
// const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!' );
// })

// // var jsonParser = bodyParser.json();

// app.post('/data', function(req,res){
//   console.log(req.body);
//   var Ss = "Data has Been Recieved";
//   res.send(Ss);
// })

// app.get("/req_data", function(req,res){
//   var str={
//       DataType:"Voltage",
//       Data:req.query.Voltage
//   };

//   const data = JSON.stringify({
//     todo: 'Buy the milk'
//   })
  


//   console.log(str);
//   res.send(console.log(str));
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// function sendToHardware(str){

// }