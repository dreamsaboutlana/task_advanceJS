'use strict';

const sum = (a = 0, b = 0) => a + b;
const first = 2;
const second = 3;

if (sum(first, second) === first + second) {
  console.log('Success!')
}
if (sum(first) === first) {
  console.log('Success!')
}
if (sum(undefined, second) === second) {
  console.log('Success!')
}

const test1 = (input, result) => {
  if (input === result) console.log('Success!');
  else console.error(`${input} not equals to ${result}`);
};

test1(sum(first, second), first + second);
test1(sum(first), first);

const testObj = {
  equal(result) {
    if (this.input === result) console.log('Success');
    else console.error(`${this.input} not equals to ${result}`);
  },
  defined() {
    if (this.input !== undefined) console.log('Success');
    else console.error(`${this.input} is not defined`);
  }
};

const test = (input) => {
  testObj.input = input;
  return testObj;
};

test(sum(2, 3)).equal(5);
test(sum()).equal();

//spies нужны для определения была ли вызвана функция
const msg = text => alert(text);
const originAlert = alert;

window.alert = (text) => {
  window.alert.wasCalled = true;
  window.alert.argument = text;
};
msg('test');
test(alert.wasCalled).equal(true);
test(alert.argument).equal('test');
window.alert = originAlert;
