const express = require('express');
const app = express();

app.use('/',express.static(__dirname + '/public'))

 app.get('/getla',(req,res)=> {
     res.send('hello world');
 })
const PORT = process.env.PORT || 4444
 app.listen(PORT);