"use strict";

var util = require('util');

var fs = require('fs'); // 返回一個新的函數，直接做成Promise物件


var mineReadFile = util.promisify(fs.readFile);
mineReadFile('./tt.txt').then(function (value) {
  console.log(value.toString());
}, function (reason) {
  console.log(reason);
});