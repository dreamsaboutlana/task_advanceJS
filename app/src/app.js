'use strict';
const header = require('./modules/header/header')();
const main = require('./modules/main/main')();
const footer = require('./modules/footer/footer')();
const $ = require('jquery');
require('./app.scss');

$('body').append(header);
$('body').append(main);
$('body').append(footer);