"use strict";

function mineReadFile(path) {
  return new Promise(function (resolve, reject) {
    require('fs').readFile(path, function (err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
}

mineReadFile('./tt.txt').then(function (value) {
  console.log(value.toString());
}, function (reason) {
  console.log(reason);
});