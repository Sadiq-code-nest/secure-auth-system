var name = ["Sadiq", "Rup", "Nibir", "Tuhin", "Shohidul","Noman"];
// name.push("naum");   
name.pop();
console.log(name);  
console.log(name[2]);       
console.log(name.length);    

//Concat
var country1 =["Bangladesh","Nepal", "Vutan"] ;
var country2 =["Pakistan","Saudi Arab", "Singapore"] ;

var country= country1.concat(country2);
console.log(country);



//Loop in Array
var num=[10,20,30,40,50]
var sum=0;
for (var i=0; i<num.length; i++)
{
console.log(num[i]);
sum=sum+num[i];
}
console.log(`Sum = ${sum}`);

