// Challenge Requirements: 
// Use multiple small functions for: 
// Getting user input (text & number) 
// Handling expenses (getting expenses, calculating total expenses) 
// Performing financial calculations (tax, net income, balance, savings) 
// Determining financial status 
// Displaying results in a structured format

console.log('Personal budget tracker challenge 6');



var Username = prompt('Enter your name: ');
var TotalIncome = parseFloat(prompt('Enter your Income: ')); 
let numberOfExpense = parseFloat(prompt('How many expense do you have?'));
if (isNaN(TotalIncome) || isNaN(numberOfExpense) || TotalIncome <= 0 || numberOfExpense <= 0) {
    console.log("invalid!!! Please give a correct number");
}
else {
    let TotalExpense = 0;

    for (let i = 1; i <= numberOfExpense; i++) {
        let Expense = parseFloat(prompt(`Enter your $expense ${i}`));
let expenseArray=[];
        if (isNaN(Expense) || Expense < 0) {
            console.log(`invalid input for expense ${i} 🚨 `);
            Expense = 0;
        }
  // Calculate the total expense using Array
        expenseArray.push(Expense);
        for (let i = 0; i < expenseArray.length; i++) {
            TotalExpense += expenseArray[i];
        }
    }
        var Tax = TotalIncome * 0.1;
        var NetIncomeAfterTax = TotalIncome - Tax;
        var RemainingBalance = NetIncomeAfterTax - TotalExpense;
        var Savings = RemainingBalance * 0.2;

        // Financial Status
        let FinancialStatus = '';
        if (Savings >= 1000) {
            FinancialStatus = 'Excellent';
        }
        else if (Savings >= 500 && Savings <= 999) {
            FinancialStatus = 'Good';
        }
        else if (Savings >= 100 && Savings <= 499) {
            FinancialStatus = 'Needs';
        }
        else if (Savings <= 100) {
            FinancialStatus = 'Critical';
        }

        console.log(`Username: ${Username}`);
        console.log(`Total Income: $${TotalIncome}`);
        console.log(`Total Expense: $${TotalExpense}`);
        console.log(`Tax Deducted (10%): $${Tax}`);
        console.log(`Net Income After Tax: $${NetIncomeAfterTax}`);
        console.log(`Remaining Balance $${RemainingBalance}`);
        console.log(`Savings $${Savings}`);
        console.log(`Financial Status: ${FinancialStatus}`);

   
}
