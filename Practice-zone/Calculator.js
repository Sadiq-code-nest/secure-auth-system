// Make a Calculator
var num1 = prompt('Enter first number');
var num2 = prompt('Enter Second number');
num1 = parseFloat(num1);
num2 = parseFloat(num2);
var sum, sub, mul, div;


sum = num1 + num2;
sub = num1 - num2;
mul = num1 * num2;
div = num1 / num2;
rem = num1 % num2;


console.log(num1 + "+" + num2 + "= " + sum);
console.log(num1 + "-" + num2 + "= " + sub);
console.log(num1 + "X" + num2 + "= " + mul);
console.log(num1 + "/" + num2 + "= " + div);
console.log(num1 + "%" + num2 + "= " + rem);