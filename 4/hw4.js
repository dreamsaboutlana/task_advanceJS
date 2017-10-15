'use strict';
/*1.*/
const names = {
  0: 'Vasya',
  1: 'Petya',
  2: 'Kolya'
};
names.length = Object.keys(names).length;
names[Symbol.iterator] = function () {
  let index = 0;
  return {
    next: () => {
      return {
        value: this[index++],
        done: index > this.length
      };
    }
  }
};
for (let name of names) {
  console.log(name);
}
/*2.*/
const obj = {
  zone: true,
  word: 'test',
  skill: 'JS',
  name: 'John'
};

obj[Symbol.iterator] = function () {
  let length = Object.keys(obj).length,
    index = 0;
  this.sortedArray = Object.keys(obj).sort();
  return {
    next: () => {
      return {
        value: this[this.sortedArray[index++]],
        done: index > length
      };
    }
  }
};
for (let l of obj) {
  console.log(l);
}
/*3.*/
const date = {
  date: new Date(),
  methods: [
    {prefix: 'FullYear is ', method: 'getFullYear'},
    {prefix: 'Month is ', method: 'getMonth'},
    {prefix: 'Day is ', method: 'getDay'},
    {prefix: 'Date is ', method: 'getDate'},
    {prefix: 'Hours is ', method: 'getHours'},
    {prefix: 'Minutes is ', method: 'getMinutes'},
    {prefix: 'Seconds is ', method: 'getSeconds'}
  ],
  getLength() {
    return this.methods.length;
  },
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index >= this.getLength()) {
          return {
            done: true
          }
        }
        return {
          value: `${this.methods[index].prefix} ${this.date[this.methods[index++].method]()}`,
          done: index > this.getLength()
        };
      }
    }
  }
};
for (let l of date) {
  console.log(l);
}


const date2 = {
  [Symbol.iterator]: function () {
    const now = new Date();
    const values = [
      'FullYear',
      'Month is ',
      'Day',
      'Date ',
      'Hours',
      'Minutes',
      'Seconds',
    ];

    let index = 0;
    return {
      next: () => {
        const value = values[index++];
        const method = now[`get${value}`];
        return index >= values.length ? {value: `${value} is ${method.call(now)}`} : {done: true};
      }
    }
  }
};
for (let l of dat2) {
  console.log(l);
}