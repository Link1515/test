"use strict";

var fs = require('fs'); // 回調函數的形式
// fs.readFile('./tt.txt', (err, data) => {
//   // 如果錯誤，就拋出錯誤
//   if (err) throw err;
//   console.log(data.toString());
// });


var p = new Promise(function (resolve, reject) {
  fs.readFile('./tt.txt', function (err, data) {
    // 如果出錯
    if (err) reject(err); // 如果成功

    resolve(data);
  });
}); // 調用 then
// p.the
//   (value) => {
//     console.log(value.toString());
//   },
//   (reason) => {
//     console.log(reason);
//   }
// );