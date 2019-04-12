const express = require('express');
const app = express();

 app.get('/',(req,res)=> {
     res.send('hello world');
 })
const PORT = process.env.PORT || 4444
 app.listen(PORT);