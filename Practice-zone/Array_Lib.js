var name = ["Sadiq", "Rup", "Nibir", "Tuhin", "Shohidul","Noman"];
console.log(name);  

name.shift();
name.unshift("Shagor");
console.log(name);     
console.log(name.length);    

// Splice ()
// Add using Splice
name.splice(2,3,"Shohan","Sayem");
console.log(name);
// Slice- No change in main array
var UpdateArray=name.slice(2);
console.log(UpdateArray);
console.log(name);

//Sort method- sequencing alphabetically
var sortedNames = name.sort()
name.reverse();
console.log(sortedNames);


// Number sorting
var num= [25,8,55,1,12];
num.sort(function (a,b) {
    return a-b;
});
num.reverse();
console.log(num);