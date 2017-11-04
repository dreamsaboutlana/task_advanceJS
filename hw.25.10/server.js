"use strict";
const http = require('http');
const fs = require('fs');
const getDate = () => {
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  return `${day}.${month}.${year}`;
};
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
    let now = getDate();
    let newData = data.replace('</body>', '<p>' + now + '</p></body>');
    
    res.end(newData);
  })

}).listen(3000, () => console.log('Server run  on 3000 port'));
