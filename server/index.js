const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
var bodyParser = require('body-parser');
const axios = require('axios')
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!' );
})

var jsonParser = bodyParser.json();

app.post('/data',jsonParser, function(req,res){
  console.log(req.body);
  var Ss = "Data has Been Recieved";
  res.send(Ss);
})

app.get("/req_data", function(req,res){
  var str={
      DataType:"Voltage",
      Data:req.query.Voltage
  };

  const data = JSON.stringify({
    todo: 'Buy the milk'
  })
  
  const options = {
    hostname: 'http://192.168.240.253',
    port: 80,
    path: '/data',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  }
  const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  req.on('error', error => {
    console.error(error)
  })
  req.write(data)
  req.end()
  
    
  console.log(str);
  res.send(JSON.stringify(str));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function sendToHardware(str){

}