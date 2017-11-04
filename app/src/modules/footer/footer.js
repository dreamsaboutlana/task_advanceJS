const builder = require('./../elementBuilder');
require('./footer.scss')
module.exports = () => {
  const content = '<p>EacyCode 2017 (c) <a href="#">Home</a></p>';
  return builder('footer', content, 'footer');
};