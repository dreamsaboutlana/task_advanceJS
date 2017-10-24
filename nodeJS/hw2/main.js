'use strict';
const fs = require('file-system');

fs.writeFile("test_folder/test.txt", new Date().toLocaleDateString(), function(e) {
  if(e) {
    return console.log(e);
  }
  console.log("The file was saved in new folder!");
});

