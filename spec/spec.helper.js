const fs = require('fs');
const chai = require('chai');

let fizzBuzz = fs.readFileSync('./src/js/fizz_buzz.js')
eval(fizzBuzz +`\nexports.FizzBuzz = FizzBuzz;`)