const express = require('express');
const app = express();
const port = 7000

app.get('/', (req, res) => {
  res.send('Hello World!' );
})
app.post('/data',(req,res)=>{
    console.log(req.body);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })