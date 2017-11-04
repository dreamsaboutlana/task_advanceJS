'use strict';
import { header } from './modules/header/header';
import main from './modules/main/main';
import footer from './modules/footer';
import $ from 'jquery';
import './app.scss';

$('body').append(header());
$('body').append(main());
$('body').append(footer());