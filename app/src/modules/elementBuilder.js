'use strict';
import $ from 'jquery';

export default (tag = 'div', conent = '', className = 'box') => {
  const element = $(`<${tag}></${tag}>`);
  element.addClass(className);
  element.html(conent);

  return element;
};