'use strict';
// node.js это окружение, постоеное с использование JS движка ChromeV8

// console.log(process.cwd());// из какой директории запущен// не работает на маке :-(
// console.log(process.platform, process.arch);
// console.log(process.argv.slice(2));//выводит информацию в масив где гаходится где запушен файл

const prettyDate = require('./date');
// const readfile = require('./read');
console.log(prettyDate());

//прочитать что написано в name.txts
//доступ к файловой системе
// const fs = require('fs');
// fs.readFile('name.txt', 'utf-8', (error, data) => {
//   if (error) return console.log(error);
//   console.log(data);
//   //вместо прописания кодирования в readFile можно сделать так
//   //console.log(data.toString('utf-8'));
// });
//заменено на readFile()
// readfile('name.txt', text => console.log(text));

//через промисы
// readfile('name.txt')
//   .then(console.log)
//   .catch(console.log);

//через асинхроную функцию
// async function readFile() {
//   let text;
//   try {
//     text = await readfile('name.txt');
//   } catch (err) {
//     text = err.message;
//   }
//   console.log(text);
// }
//
// readFile();

//get запрос http
// const http = require('http');
// http.get('http://info.cern.ch', (res) => {
//   if (res.statusCode !== 200) throw new Error(res.statusCode);
//   res.setEncoding('utf-8');
//   res.on('data', console.log);
// });
//
// //get запрос https с выводом posts в консоль
// const https = require('https');
// https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
//   if (res.statusCode !== 200) console.log(new Error(res.statusCode));
//   res.setEncoding('utf-8');
//   let result = '';
//   res.on('data', data => result += data);// записывает в переменную первую порцию данных
//   res.on('end', () => console.log(result));// срабатывает рах когда все данные получены и закрывает соединение
// });
//
// const weather = require('yahoo-weather');
// weather('paris')
//   .then(data => {
//     console.log(data.description);
//     console.log(data.item.condition);
//   })
//   .catch(console.log);
//
// weather('kharkiv')
//   .then(data => {
//     console.log(data.description);
//     console.log(data.item.condition);
//   })
//   .catch(console.log);