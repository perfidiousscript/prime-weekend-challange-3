var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var calculate = require('./calculate.js');
var urlParser = bodyParser.urlencoded();

app.use(urlParser);

app.set('port', process.env.PORT || 5000);

app.post('/calculate', function(req,res){
    var answer = {};
    answer.value = (calculate(req.body));
    res.send(answer);
});

app.get('/*', function(req,res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname,"../public/",file))
});

app.listen(app.get('port'), function(){
   console.log('Listening on port: ', app.get("port"));
});