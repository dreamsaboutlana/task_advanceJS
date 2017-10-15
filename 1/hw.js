'use strict';

/*1.1.Вычислить максимальное число в массиве чисел.*/

const arr = [34, 7, 35, 3, 89, 69];
Math.max(...arr);


/*1.2. */
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [...a, ...b];

/*1.3.*/

const writeOptionsToDom = (...opts) => document.write(opts);
writeOptionsToDom();

/*2.1.*/

const getParam = (firstElem, ...opts) => { 'fisrt': firstElem, 'other': opts };
getParam('Sveta', 'lololo', 5, 7, 23);

/*2.2*/

const organisation = {
    name: 'Google',
    info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing'] }
};

const getInfo = (organisation) => {
    const { name = 'Unknow', info: { partners: [partner1, partner2, ...otherPartners] } } = organisation;

    console.log(`Name: ${name}`);
    console.log(`Partners: ${partner1}, ${partner2}`);
}
getInfo(organisation);

/*3.1.*/

const sum = (...opts) => {
    if (!opts.length) return 0;

    return opts.reduce((prev, next) => prev + next);
}
sum(1, 2, 3, 4); // 10
sum(); // 0


/*3.2.*/

const utils = {
    numbers: [1, 2, 3, 4],
    prefix: 'number',
    getOdd: function() {
        return this.numbers.map((number) => {
            return this.prefix + ' - ' + number;
        })
    }
};
utils.getOdd();

/* 3.3.*/
const getDate = () => new Date();

const getDay = () => {
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[new Date().getDay()];
}

const getListCopy = list => list.slice();
