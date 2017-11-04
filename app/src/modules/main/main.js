import builder from './../elementBuilder';
import getDate from './getDate';
import './main.scss';

export default () => {
  let list = '<ul>';
  for (let i = 1; i <= 20; i++) {
    list += `<li> Item${i}</li>`;
  }
  list+='</ul>';
  const content = `<h1>Awesome Things You Can Build with Node.js</h1><p>${getDate()}</p>${list}`;
  return builder('main', content, 'main');
};