const util = require('util');
const fs = require('fs');

// 返回一個新的函數，直接做成Promise物件
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./tt.txt').then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log(reason);
  }
);
