//	Math object- sqrt(),abs,sin,cos,pow
//  Math object- floor(under decimal),ceil(upper decimal),
//  Math object-round, max, random

var Num1=parseFloat(prompt('Enter first number: '));
var Num2=parseFloat(prompt('Enter Second number: '));

var maxNumber=Math.max(Num1,Num2);
console.log(maxNumber);



// Random number generate --- random print value from 0 to 1
var Random=Math.floor(Math.random() *5)+ 10;
console.log(Random);