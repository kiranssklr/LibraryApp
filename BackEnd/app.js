const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello Good Evening');
});

app.listen(8000);