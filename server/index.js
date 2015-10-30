var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 5000);

app.get('/*', function(req,res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname,"../public/",file))
});

app.listen(app.get('port'))