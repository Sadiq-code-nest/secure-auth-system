// For conversion JS to Json--- JSON.stringify
// For conversion Json to JS --- JSON.parse



//conversion of JS to Json
const data={
name : "Sadiq",
Age : 23
}

console.log(JSON.stringify(data));

//conversion of Json to JS
let jsonData= {
    "friend": [
        {
            "Name": "Anar",
            "Age": 25
        },
        {
            "Name": "Ruhul",
            "Age": 29
        }
    ]
}

console.log(JSON.parse(jsonData));
