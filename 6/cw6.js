"use strict";

//Асинхронная функция возвращает промис
async function test() {
  return 15;
}

const func = async (num) => num * 5;
func();

//ничего не приносит в функцию которая возвращает промис
const test1 = async () => new Promise(resolve => setTimeout(() => resolve('Yahoo!'), 500));
test1().then(console.log);
// если внутри промиса есть throw то промис будет за reject

//Await operator
//используется внутри асинхронной функции
const test2 = async () => {
  const result = await 12;
  console.log(result);
};
//плоский асинхронный код без колбеков, не нужно использовать then для получения результата из промисса
const foo = async () => {
  const result = await new Promise(resolve => setTimeout(() => resolve('Ola, await!')));
  console.log(result);
};

//синхронная функция не блокирует страницу
const getPhotos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos = await response.json();

  console.log(photos);
};

const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  const ul = document.createElement('ul');

  ul.innerHTML = users.map(user => `<li>${user.name}</li>`).join('');
  document.body.insertAdjacentElement('afterbegin', ul);
};

//==
const getUsers2 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return users;
};
getUsers2()
  .then(users => {
    const ul = document.createElement('ul');
    ul.innerHTML = users.map(user => `<li>${user.name}</li>`).join('');
    document.body.insertAdjacentElement('afterbegin', ul);
    return users;
  })
  .then(console.log)
  .catch(err => console.log('Error!', err));

// ===
const getUsers3 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  const userNames = users.map(user => user.name);
  if (!Array.isArray(users)) {
    throw 'Wrong response!';
  }
  return userNames;
};
getUsers3()
  .then(users => {
    const ul = document.createElement('ul');
    ul.innerHTML = '<li>' + users.join('</li><li>') + '</li>';
    document.body.insertAdjacentElement('afterbegin', ul);
    return users;
  })
  .then(console.log)
  .catch(err => console.log('Error!', err));

//

const getUsers4 = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  let userNames;
  try {
    userNames = users.map(user => user.name);
  } catch (err) {
    userNames = ['Opps!'];
  }
  return userNames;
};

getUsers4()
  .then(users => {
    const ul = document.createElement('ul');
    ul.innerHTML = '<li>' + users.join('</li><li>') + '</li>';
    document.body.insertAdjacentElement('afterbegin', ul);
    return users;
  })
  .then(console.log)
  .catch(err => console.log('Error!', err));

///асинхронная функция может внутри себя использовать асинхронную функцию
async function drawUsers() {
  const users = await getUsers4();
  const ul = document.createElement('ul');

  ul.innerHTML = '<li>' + users.join('</li><li>') + '</li>';
  document.body.insertAdjacentElement('afterbegin', ul);
}

drawUsers();

async function createUser(users = []) {
  const postUser = data => $.ajax('https://jsonplaceholder.typicode.com/users', {method: 'POST', data});
  let newUsers;
  try {
    newUsers = await Promise.all(users.map(postUser));
  } catch (err) {
    // newUsers = new Error(err);
    newUsers = `${err.statusText}, ${err.status}`;
  }
  console.log(newUsers);
}

createUser([{name: 'Sveta', age: 27}, {name: 'Yarik', age: 31}]);

//Git