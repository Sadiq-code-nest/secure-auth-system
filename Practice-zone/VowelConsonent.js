// Vowel Consonent
var Letter = prompt('Enter a letter: ');
Letter = Letter.toLowerCase();

if (Letter == 'a' || Letter == 'e' || Letter == 'i' || Letter == 'o' || Letter == 'u') 
    { 
        console.log(`${Letter} is Vowel`) 
    }

else { console.log ( `${Letter} is Consonent`) };
