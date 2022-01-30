const express = require('express');
const app = express();
const path = require("path");
const fs = require("fs");
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!' + req.query)
})

app.post('/', (req,res)=>{
  var S= req.h;
  console.log("ONLY REQ====",req.h);
  var Ss = "Done";
  res.send(Ss);
})

// const DB_PATH = path.resolve("db.json");

// app.use(express.json());

// app.get("/", async (req,res) => {
//   console.log(res + "hello");
//     fs.readFile(DB_PATH, "utf-8", (err, jsonString) => {
//       if (err) return console.log("Error in reading from db");
//       let values = JSON.parse(jsonString);
//       res.status(200).json({
//         totalValues: values.length,
//         values,
//       });
//     });
//   });

//   app.post("/", async (req, res) => {
//     console.log(res + "world");
//     fs.readFile(DB_PATH, "utf-8", (err, jsonString) => {
//       if (err) return console.log("Error in reading from db");
//       let body = req.body;
//       let valuesArr = JSON.parse(jsonString);
//       let obj = {
//         temperature: body.Name1,
//         humidity: body.Name2,
//         timestamp: new Date(),
//       };
//       valuesArr.push(obj);
//       fs.writeFile(DB_PATH, JSON.stringify(valuesArr), (err) => {
//         if (err) return console.log("Error in updating db");
//         res.status(200).json({
//           message: "Values saved",
//           value: valuesArr[valuesArr.length - 1],
//         });
//       });
//     });
//   });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
