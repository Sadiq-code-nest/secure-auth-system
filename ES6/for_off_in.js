// for...of and for...in
// for in use to Array iterate

const friend =[  'Sadiq', 'Sajid', 'Naum']
for (let element of friend) {
    console.log(element)
}

// for in use to object iterate

let student= {
name: 'sadiq',
roll: 63,
cgpa: 3.45
}
for (let key in student) {
   console.log(`${key}:${student[key]}`);
}