const builder = require('./../elementBuilder');
const getDate = require('./getDate');
require('./main.scss');

module.exports = () => {
  const content = `<h1>Awesome Things You Can Build with Node.js</h1><p>${getDate()}</p>`;
  return builder('main', content, 'main');
};