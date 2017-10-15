"use strict";
/*1.*/
const promiseCreator = (time, str) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(str)
    }, time);
  });
};
const prom = promiseCreator(500, 'ok!');

/*2*/
class Prom {
  constructor() {
    this.promise = new Promise((res, rej) => {
      this.resolve = res;
      this.reject = rej;
    });
  }

  resolver(data) {
    this.resolve(data);
  }

  rejector() {
    this.reject(new Error('Some error!'));
  }
}
const prom1 = new Prom();
prom1.promise.then(data => console.log(data));

/*3*/
const btn = document.getElementById('inputBtn');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  const inputElValue = document.getElementById('textField').value;
  const prom = new Prom();
  prom.promise.then(data => console.log(data));
  prom.resolver(inputElValue)
});

/*4.*/
const httpResult = fetch('https://jsonplaceholder.typicode.com/posts');
httpResult
  .then(data => data.json())
  .then(data => {
    const ul = document.createElement('ul');
    let str = '';
    for (let i = 0; i < data.length; i++) {
      str += `<li>id: ${data[i].id}, title: ${data[i].title}</li>`;
    }
    ul.innerHTML = str;
    return ul;
  })
  .then(data => {
    const body = document.querySelector('body');
    return body.appendChild(data);
  });

/*5.*/
Promise.all([
  fetch('https://jsonplaceholder.typicode.com/posts').then(data => data.json()),
  fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json())
])
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      if (!i) {
        console.log(`Posts ${data[i].length}`);
        continue;
      }
      console.log(`Users ${data[i].length}`)
    }
  });
