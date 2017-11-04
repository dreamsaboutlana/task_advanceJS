"use strict";
const fs = require('fs');
const http = require('http');

// let counter = 0;
// http
//   .createServer((req, res) => {
//     res.end('Hello Sveta!', () => {
//       console.log(`Sent ${++counter}`);
//
//     });
//   })
//   .listen(3000, () => console.log('Hello Sveta'));

//для корректного отображения переданного html текста нужно передавать заголоки
// http
//   .createServer((req, res) => {
//   res.setHeader('Content-Type', 'text/html');
//     res.end('<strong>Hello Node!</strong>');
//   })
//   .listen(3000, () => console.log('Server run  on 3000 port'));


// http
//   .createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     http.get('http://wttr.in/~kharkov', (response) => {
//       if (response.statusCode !== 200) {
//         res.end('<strong style="color:red">Error!</strong>');
//         return;
//       }
//       response.setEncoding('utf-8');
//       let result = '';
//       response.on('data', data => result += data);
//       response.on('end', () => {
//         const updateResult = result.replace('</style>','body{background-color:#000; color:#2196F3}</style>');
//         res.end(updateResult);
//       });
//     });
//   })
//   .listen(3000, () => console.log('Server run  on 3000 port'));


// http
//   .createServer((req, res) => {
//     console.log('headers', req.headers);// запрашивает хедерс
//     console.log('method', req.method);//запрашивает методзапроса
//     console.log('url', req.url);//запрашивает url
//     res.setHeader('Content-Type', 'text/html');
//     http.get('http://wttr.in/~kharkov', (response) => {
//       if (response.statusCode !== 200) {
//         res.end('<strong style="color:red">Error!</strong>');
//         return;
//       }
//       response.setEncoding('utf-8');
//       let result = '';
//       response.on('data', data => result += data);
//       response.on('end', () => {
//         const updateResult = result.replace('</style>', 'body{background-color:#000; color:#2196F3}</style>');
//         res.end(updateResult);
//       });
//     });
//   })
//   .listen(3000, () => console.log('Server run  on 3000 port'));


http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text-html');

  if (/jpg|png|gif|jpeg/.test(req.url)) {
    fs.readFile(req.url.replace('/', 'img/'), (err, data) => {
      if (err) {
        res.end('<strong>Error!!!</strong>');
        throw new Error('Error');
      }
      res.end(data);
    });
    return;
  }
  if (/js/.test(req.url)) {
     fs.readFile(req.url.replace('/', 'js/'), (err, data) => {
      if (err) {
        res.end('<strong>Error!!!</strong>');
        throw new Error('Error while reading star.jpg');
      }
      res.end(data);
    });
    return;
  }
  fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
      res.end('<strong>Error!!!</strong>');
      throw new Error('Error while reading index.html');
    }
    res.end(data);
  })
}).listen(3000, () => console.log('Server run  on 3000 port'));