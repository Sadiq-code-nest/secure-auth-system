console.log('Personal budget tracker challenge');

var Username=prompt('Enter username: ');
var TotalIncome=5000;
// Expense partition
let rent= 1200;
let groceries= 500;
let transport=200;
let Entertainment=356;
//Calculate Expense
let TotalExpense= rent+groceries+transport+Entertainment;

var Tax=TotalIncome*0.1;
var NetIncomeAfterTax=TotalIncome-Tax;
var RemainingBalance=NetIncomeAfterTax-TotalExpense;
var Savings=RemainingBalance*0.2;

console.log(`Username: $${Username}`);
console.log(`Total Income: $${TotalIncome}`);
console.log(`Total Expense: $${TotalExpense}`);
console.log(`Tax Deducted (10%): $${Tax}`);
console.log(`Net Income After Tax: $${NetIncomeAfterTax}`);
console.log(`Remaining Balance $${RemainingBalance}`);
console.log(`Savings $${Savings}`);