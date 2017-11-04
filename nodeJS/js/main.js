'use strict';
const getImageSize = () => {
  let img = document.querySelector('img');
  console.log(`Image width ${img.width} and height ${img.height}`);
};
getImageSize();