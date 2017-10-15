'use strict';

//Generators
function* simplGen() {
  yield 5;
  yield 6;
};
const it = simplGen();
it.next();
const list = [...it]; //вернет массив [5, 6]


function* numGen(num) {
  yield num + 5;
  yield num + 6;
}

function* counter() {
  let counter = 0;
  yield 'Counter is ' + counter++;
  yield 'Counter is ' + counter++;
  yield 'Counter is ' + counter++;
  yield 'Counter is ' + counter++;
  yield 'Counter is ' + counter;

}

function* test() {
  console.log('Start');
  yield 1;

  console.log('One is done');
  yield 2;

  const someVar = 2;
  console.log('Two is done', someVar);
  yield 3;

  console.log('done');
}

var a = test()
a.next();
//Start
// {value: 1, done: false}
a.next();
//One is done
//{value: 2, done: false}
a.next();
//Two is done 2
//{value: 3, done: false}
a.next();
// done
//{value: undefined, done: true}
a.next();

//{value: undefined, done: true}

function* infinity() {
  let index = 0;
  while (true) {
    yield  index++;
  }
}

const infin = infinity();

//алфавит
function* alphabet() {
  let index = 65;
  while (true) {
    yield String.fromCharCode(index++);
  }
}

//Return in generetor
function* text() {
  yield 'hello';
  yield 'ola';
  return 'by-by';
}

//если после ретерна стоят yield то они не сработают
//если в итераторе throw то выполнение генератора тоже прикратится
//генераторы yieldят другие генераторы

function* generateNums(from, to) {
  for (; from <= to; from++) {
    yield  from;
  }
}

[...generateNums(1, 3)];//[1,2,3]

function* getNums() {
  let index = 0;
  yield* generateNums(index, index + 5);
  yield* generateNums(4, 10);
  //в старом варианте
  //for(;index < index + 10; index++){
  //yield index;
  // }
}

const odd = getNums();
[...getNums()];

//можно елдить в разном диапозоне


function* test() {
  const greet = yield "gemme a greetiong";
  console.log(greet);
}

const its = test();
its.next(); //{value: "gemme a greetiong", done: false}
its.next('hello'); // hello //{value: undefined, done: true}


/*
const boo = 5;
{
  console.log(boo);
  const boo = 10;
}
отличия (временная мертвая зона)
const boo = 5;
{
  console.log(boo);
}
*/

function* stepper() {
  console.log(yield 'Enter step1');
  console.log(yield 'Enter step2');
  console.log(yield 'Enter step3');
}

var step = stepper();
step.next().value; //"Enter step1"
step.next('hello').value;// hello //"Enter step2"
step.next('lololo').value; // lololo //"Enter step3"
step.next('lololo').value; // lololo //undefined
step.next('lololo').value; //undefined

function* getFullName() {
  const name1 = yield 'enter 1st name';
  const name2 = yield `${name1}, enter 2nd name`;
  const name3 = yield `${name1} ${name2}, enter 2nd name`;

  return `${name1} ${name2} ${name3}`;
}

const itr = getFullName();
itr.next();

function* asyncgen() {
  yield (new Promise((resolve) => {
    setTimeout(() => resolve('Done!'), 2000);
  }));
}

const time = asyncgen();
const val = time.next(); //Promise
val.value.then(console.log); //Done!

// ------------
const url = 'https://jsonplaceholder.typicode.com';
fetch(`${url}/posts`)
  .then(resp => resp.json())
  .then(console.log);