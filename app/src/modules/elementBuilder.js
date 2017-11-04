'use strict';
const $ = require('jquery');
module.exports = (tag = 'div', conent = '', className = 'box') => {
  const element = $(`<${tag}></${tag}>`);
  element.addClass(className);
  element.html(conent);

  return element;
};