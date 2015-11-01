var addition = require('./add.js');
var subtraction = require('./subtract.js');
var multiplication = require('./multiply.js');
var division = require ('./divide.js');

var calculate = function(equation){
    var firstValue = parseInt(equation.firstValue);
    var secondValue = parseInt(equation.secondValue);
    switch(equation.operation){
        case 'add':
            return addition(firstValue,secondValue);
            break;
        case 'subtract':
            return subtraction(firstValue,secondValue);
            break;
        case 'multiply':
            return multiplication(firstValue,secondValue);
            break;
        case 'divide':
            return division(firstValue,secondValue);
            break;
    }
};

module.exports = calculate;