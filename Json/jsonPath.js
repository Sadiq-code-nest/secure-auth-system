// Access , Modify, Delete, Conversion
// Use for JSON code organize- https://codebeautify.org/jsonviewer
// Use for find path help- https://jsonpathfinder.com/
// Use for more fake data - https://jsonplaceholder.typicode.com/
const data=require('./Friends_data.json');
console.log(data);

//Access
console.log(data.friend[0].Age);
//Modify
console.log(data.friend[0].Age=78);
//delete 
delete data.friend[0].Age;

console.log(data);

//Use of -- for in loop in JSON file
for (let key in data) {
   console.log(key)
}
 