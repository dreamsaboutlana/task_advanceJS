'use strict';
const header = require('./modules/header/header')();
const footer = require('./modules/footer/footer')();
const $ = require('jquery');
require('./app.scss');

// console.log($('div'));

document.body.appendChild(header);
document.body.appendChild(footer);