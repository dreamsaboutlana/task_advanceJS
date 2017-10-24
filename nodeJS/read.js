'use strict';
// const fs = require('fs');
// const read = (fileName, func) => {
//   fs.readFile(fileName, (err, data) => {
//     if (err) return console.log(err);
//     func(data.toString('utf-8'));
//   });
// };
// module.exports = read;

//замена readFile на промисс

const fs = require('fs');
const read = (fileName) => new Promise((resolve, reject) => {
  fs.readFile(fileName, (err, data) => {
    if (err) return reject(err);
    resolve(data.toString('utf-8'));
  });
});

module.exports = read;