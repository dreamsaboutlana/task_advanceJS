'use strict';

//operator spread...
//расширение/остаток
//ES6(EcmaScript2015) работает в IE9+
//ES7(EcmaScript2016)
//ES8(EcmaScript2017)
// позволяет расширять выражения в тех местах, где предусмотрено использование нескольких аргументов расширяет элеменьы масива
/**/
const numbers = ['one', 'two', 'three'];
var num = [...numbers, 2, 3, 4];

/*
slice,spred позволяет создавать поверхносные копии когда ссылаются на один обьект
глубокая копия, когда копия ссылается на новую ссылку
*/

// приработе с псевдомассивом использовать спред оператор для преобразования в обычный массив
// для работы с ним как с нормальным массивом
// const links = document.links;
// [...links].forEach(link => console.log(link.textContent));

//позволяет использовать массивы в конструкторах
//конструкторы не используется с apply
// хочется new User('title',"Joh") -> User{title:'Joh'}
// new User.apply(null,param) не работает
// new User(...params);

//...REST оператор
//используется вместо arguments
//arguments нет у функции стрелок
// применяется внутри функции позваляет запихнуть все параметры функции в массив
function foo(...opts) {
  console.log(opts)
};

function foo(name, ...opts) {
  console.log(name);
  console.log(opts);
};
//деструкция
const [item1, item2] = [1, 2];
//const item1 = 1;
//const item2 = 2;
//если хочется пропустить аргумент то можно использовать пустую запятую
//для сохранения оставшихся или пропустившие переменнные можно записать в массив при помощи rest


const figure = {width: 1, heigth: 12, type: 'square'};
const {width, heigth, type} = figure;
const {width: w, heigth: h, type: t} = figure;
console.log(w, h, t);

// const = info { type:'html'};
// const {type, size = 0} = { 'lolo', 90};

const {name, age} = (name, age) => {
  return {name, age};
}

//function default parameters

function greeting(msg = 'hello', name = 'User') {
  console.log(`${msg}, ${name}`);
}

greeting();

//=>

