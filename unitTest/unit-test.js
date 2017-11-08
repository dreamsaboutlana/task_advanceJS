"use strict";

const clc = require('cli-color');

class Fail extends Error {
  constructor() {
    super();
    this.message = 'Fail';
  }
  echo() {
    console.log(clc.red(`\t\t${this.message}`));
  }
}

class Success {
  constructor() {
    this.message = 'Success';
  }
  echo() {
    console.log(clc.green(`\t\t${this.message}`));
  }
}


const users = [{age: 15}, {age: 14}, {age: 28}, {age: 18}, {age: 45}, {age: 68}, {age: 38}, {age: 22}, {age: 14}];

// 1
const getDay = () => {
  return new Date().getDay();
};

// 2
const getAdultUsers = (users = []) => users.filter(user => user.age > 18);

// 3
const getRandomUsers = (users) => {
  const numb = Math.random();

  if (!users) {
    return false;
  }

  const length = users.length;
  const middleUser = Math.round(length / 2);

  if (numb > 0.5) {
    return users.slice(0, middleUser);
  }

  return users.slice(middleUser, length);
};

const testIt = (nameOfTest, callback) => {
  try {
    console.log(nameOfTest);
    callback();
  } catch(e) {
    e.echo();
  }
};

// 1
testIt('GetDay return current day', () => {

  const currentDay = new Date().getDay();
  if (getDay() === currentDay) {
     throw new Success();
  }
  throw new Fail();
});

// 2
testIt('GetAdultUsers return empty array', () => {
    const users = [];
    if (!getAdultUsers(users).length) {
       throw new Success();
    }
    throw new Fail();
});

testIt('GetAdultUsers return filtered array', () => {
   const users = [{age: 10, name: 'Alex'},{age:19, name: 'Vasya'}];

   if (getAdultUsers(users).length == 1) {
      throw new Success();
   }
   throw new Fail();
});

// 3
testIt('getRandomUsers return false', () => {
  const users = null;
  if (!getRandomUsers(users)) {
      throw new Success();
  }
  throw new Fail();
});

const originalMathRandom = Math.random;
const mockMath = Object.create(global.Math);

testIt('getRandomUsers return first part of array', () => {
   const randomNumberValue = 0.6;

   mockMath.random = () => randomNumberValue;
   global.Math = mockMath;

   const initialUser = [...users];
   const slicedUsers = getRandomUsers(initialUser);

   if (JSON.stringify(slicedUsers) === JSON.stringify(users.slice(0, Math.round(users.length / 2)))) {
     throw new Success();
   }
   throw new Fail();
});

testIt('getRandomUsers return second part of array', () => {
  const randomNumberValue = 0.3;

  mockMath.random = () => randomNumberValue;
  global.Math = mockMath;

  const initialUser = [...users];
  const slicedUsers = getRandomUsers(initialUser);

  console.log(initialUser, slicedUsers);

  if (JSON.stringify(slicedUsers) === JSON.stringify(users.slice(Math.round(users.length / 2), users.length))) {
    throw new Success();
  }
  throw new Fail();
});

global.Math.random = originalMathRandom;

