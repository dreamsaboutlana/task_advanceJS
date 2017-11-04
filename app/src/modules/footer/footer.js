import builder from './../elementBuilder';
import './footer.scss';

export default () => {
  const content = '<p>EacyCode 2017 (c) <a href="#">Work</a></p>';
  return builder('footer', content, 'footer');
};