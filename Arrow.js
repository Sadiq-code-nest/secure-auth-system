function square (params) {
    console.log(`Square of ${params}: ${params*params}`);

}
// const y= square;
// y(13);

function higherOrderFunction(num, Hard){
    Hard(num)

}
higherOrderFunction(9, square);

