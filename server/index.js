const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
var bodyParser = require('body-parser');
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

  console.log(str);
  res.send(console.log(str));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
