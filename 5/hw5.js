"use strict";

/* 1*/
function* getValue(num) {
  let sum = num;
  while (sum <= 1000000000) {
    yield sum = sum * num;
  }
  throw new Error('Value is too big!');
}

const valuer = getValue(500);
valuer.next().value;

/*2*/

function* createSeconds() {
  while (true) {
    yield Math.floor((new Date().getSeconds())/10)*10;
  }
}
const getSec = createSeconds();
getSec.next().value;
