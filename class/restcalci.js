'use strict';

var express = require ("express");

var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false  }));
app.use(bodyParser.json());
app.post("/addition/:number1/:number2",function(request,response){
    console.log("/add route executed ...")
    
    var data = {
        num1:parseInt(request.body.number1),
        num2:parseInt(request.body.number2),
        result:parseInt(request.body.number1) + parseInt(request.body.number2)
    };
    console.log(data);
    response.json(data);

});
app.listen(3000)