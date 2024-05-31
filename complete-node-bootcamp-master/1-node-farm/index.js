const fs = require('fs');
const http = require('http');
const url = require('url');
////////////////////////////////////////
////FILES


// // Read the content from input.txt
// const textIn = fs.readFileSync('starter/txt/input.txt', 'utf-8');
// console.log(textIn);

// // Prepare the output text with the current timestamp
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${new Date()}`;
// fs.writeFileSync('starter/txt/textOut.txt', textOut);
// console.log('File written!');



// fs.readFile('starter/txt/start.txt', 'utf-8', (err, data1) => {
//       fs.readFile(`starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('starter/txt/append.txt', 'utf-8', (err, data3) => {
//           console.log(data3);

//           fs.writeFile('/starter/txt/final.txt','$(data2} \n${data3}', 'utf-8', (err =>{
//             console.log(('Your file has been written!😜'))

//           }))
//         });
//       });
//     });
// console.log('Will read file!');

////////////////////////////////////////
////SERVER
const server = http.createServer ((req, res ) => {
    const pathName = req.url;
    if(pathName === '/' || pathName === '/overview'){
        res.end('This is the OVERVIEW');
    }  else if (pathName ===  '/product' ){
        res.end('This is the Product');
    }   else{
        res.writeHead(404, {
            'Content-type':'txt/html',
            'my-own-header': 'Hello-World!'
        });
        res.end('<h1>Pagen not fount!</h1>');
    }
  




});

server.listen(8000,'127.0.0.1',() =>{
    console.log('Listening to request on port 8000');
})
