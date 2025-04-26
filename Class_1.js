// function square (params) {
//     console.log(`Square of ${params}: ${params*params}`);

// }
// // const y= square;
// // y(13);

// function higherOrderFunction(num, Hard){
//     Hard(num)

// }
// higherOrderFunction(9, square);



// const fs = require('fs');
// fs.readFile ('demol.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
//     });



const http = require('http'); 
const port = 3000; 
const hostname = '127.0.0.1' ;
const myServer = http.createServer((req, res)=> {   
res.writeHead(202, {'Content-Type': 'text/plain'}); 
res.write("hello"); 
res.end(); 
}); 
myServer.listen(port, hostname, ()=>{ 
console.log(`server is running successfully at http://${hostname}:${port}`); 
});