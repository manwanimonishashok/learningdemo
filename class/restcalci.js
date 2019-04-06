'use strict';

var express = require ("express");

var app = express();

var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false  }));
app.use(bodyParser.json());


app.post("/add/:num1/:num2",function(request,response){
    console.log("/add route executed ...")
    
    var data = {
        num1:parseInt(request.body.num1),
        num2:parseInt(request.body.num2),
        sum:parseInt(request.body.num1) + parseInt(request.body.num2)
    };
    console.log(data);
    response.send(data);
});

app.listen(3000);