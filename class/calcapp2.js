'use script';
//sum function

var express = require("express");

var app = express();

var sumFunction = function() {


app.get("/sum/:number1/:number2" , function(request, response){
    var number1 = parseInt(request.params.number1);
    var number2 = parseInt(request.params.number2);
    var sum = number1 + number2;
    response.send("Sum of numbers is" + sum);
});


};

sumFunction();

//Minus function

var minusFunction = function() {
    
app.get("/minus/:number1/:number2" , function(request, response){
    var number1 = parseInt(request.params.number1);
    var number2 = parseInt(request.params.number2);
    var minus = number1 - number2;
    response.send("Difference of numbers " + minus);
});


};

minusFunction();

//Multiplication function

var multFunction = function() {
    
app.get("/mult/:number1/:number2" , function(request, response){
    var number1 = parseInt(request.params.number1);
    var number2 = parseInt(request.params.number2);
    var mult = number1 * number2;
    response.send("Product of numbers " + mult);
});


};

multFunction();


//Divide function

var divideFunction = function() {
    
app.get("/divide/:number1/:number2" , function(request, response){
    
    var number1 = parseInt(request.params.number1);
    var number2 = parseInt(request.params.number2);
    if(number2 !=0) {
    var divide = number1/number2;
    response.send("Division of numbers " + divide);
    }
});


};

divideFunction();

app.listen(3000);