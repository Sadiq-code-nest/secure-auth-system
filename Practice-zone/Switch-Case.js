// Vowel Consonent using switch case
var Letter=prompt('Enter a letter: ');
Letter=Letter.toLowerCase();

switch (Letter)
{  
case "a": 
console.log('Vowel');
break;
case "e": 
console.log('Vowel') ;
break;
case "i": 
console.log('Vowel') ;
break;
case "o": 
console.log('Vowel') ;
break;
case "u": 
console.log('Vowel');
break;
default: 
console.log('Consonent');
}




// Another way

switch (Letter)
{  
case "a": 
case "e": 
case "i": 
case "o": 
case "u": 
console.log('Vowel');
break;
default: 
console.log('Consonent');
}
