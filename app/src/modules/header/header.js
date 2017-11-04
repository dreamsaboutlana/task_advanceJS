import builder from './../elementBuilder';
import './header.scss';

export const header = () => {
  const content = '<a href="/">Logo</a>';
  return builder('header', content, 'header');
};