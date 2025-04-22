// Letter Grade Program


var Number = prompt('Enter your marks: ');

if (Number >=80 && Number <= 100) {
    console.log('You got A+');
}
else if (Number >= 70 && Number <= 79) {
    console.log('You got A');
}
else if (Number >= 60 && Number <= 69) {
    console.log('You got A-');
}
else if (Number >=50 && Number <= 59) {
    console.log('You got B');Number
}
else if (Number >=40 && Number <= 49) {
    console.log('You got C');
}
else if (Number >= 33 && Number <= 39) {
    console.log('You got D');

}
else if (Number >=0 && Number <= 32) {
    console.log('You got F');
}
else {
    console.log('Your input is not valid' )
};