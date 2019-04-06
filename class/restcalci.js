'use strict';

var express = require ("express");

var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false  }));
app.use(bodyParser.json());
app.post("/addition/:number1/:number2",function(request,response){
    console.log("/add route executed ...")
    
    var data = {
        num1:parseInt(request.body.num1),
        num2:parseInt(request.body.num2),
        result:parseInt(request.body.num1) + parseInt(request.body.num2)
    };
    console.log(data);
    response.send(data);

});
app.listen(3000);