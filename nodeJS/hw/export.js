"use strict";
const randomNum = (min, max) => {
  return Math.random() * (max - min) + min;
};
module.exports = randomNum;
