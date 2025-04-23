var promptManager =parseInt(prompt('Enter a number: '));
// console.log(promptManager);
var randomGenerate = Math.floor(Math.random() * 5) + 1;
// console.log(randomGenerate);
if (promptManager === randomGenerate) {
    console.log("Yahooooooooo 😄 You won the Game !!!!!!!!")
}
else 
{ 
    console.log(`Sorry You loss ☹️  number was ${randomGenerate}`);
}