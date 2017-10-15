'use strict';

//классический итертор
function iterator() {
  return {
    next: function () {
      return {
        value: 'some value',
        done: true || false
      }
    }
  }
}

//сделать итерированым любой обьект
const num = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: 3
};
num[Symbol.iterator] = function () {
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
for (let val of num) {
  console.log(val);
}

//итератор вне цикла
const nums = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: 3
};
nums[Symbol.iterator] = function () {
  const length = Object.keys(this).length;
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
const it = nums[Symbol.iterator]();

it.next();
it.next();
it.next();
it.next();

const chart = ['a', 'b', 'c'];
chart[Symbol.iterator] = function () {
  const length = Object.keys(this).length;
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
const it1 = chart[Symbol.iterator]();
it1.next();

//перебрать обьект от 0 до 3

const obj = {
  from: 0, to: 3,
  [Symbol.iterator]: function () {
    let index = this.from;
    return {
      next: () => ({
        value: index++,
        done: index > this.to
      })
    };
  }
};

for (let num of obj) {
  console.log(num);
}

//юесконечный цикл
const infinity = {
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => ({
        value: index++,
        done: false
      })
    };
  }
};

//
const alphabet = {
  [Symbol.iterator]: function () {
    let index = 65;

    return {
      next: () => ({
        value: String.fromCharCode(index++),
        done: index > 95
      })
    };
  }
};
[...alphabet];

//Array.from для создания итерированого массива

const numbers = {0: 'zero', 1: 'one', 2: 'two'};
const itereble = Array.from(numbers);

for (let val of itereble) {
  console.log(val);
}
