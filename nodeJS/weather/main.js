'use strict';
/*
Создать проект “weather”.
Сделать гет запрос к сайту “http://wttr.in/~kharkov”.
Сохранить полученные данные в файл weather.html.
Запуск приложения должен производиться через npm start.
Для решения данной задачи можно устанавливать любые пакеты и использовать любые модули.
Все зависимости должны быть отображены в package.json.
*/
const fs = require('file-system');
const http = require('http');
http.get('http://wttr.in/~kharkov', (res) => {
  if (res.statusCode !== 200) throw new Error(res.statusCode);
  res.setEncoding('utf-8');
  let result = '';
  res.on('data', data => result += data);
  res.on('end', () => fs.writeFile("weather.html", result, function (e) {
    console.log(result);
    if (e) {
      return console.log(e);
    }
    console.log("The file was saved!");
  }));
});
