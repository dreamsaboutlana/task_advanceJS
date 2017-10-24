'use strict';
console.log('Текущая дата', new Date().toLocaleDateString());
console.log("Сейчас запущен файл", process.argv.slice(1)[0].split('/')[(process.argv.slice(1)[0].split('/')).length - 1]);

const randomNum = require('./export');
console.log('Рандомное число', randomNum(5, 100));