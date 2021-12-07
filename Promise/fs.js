const { rejects } = require('assert');
const fs = require('fs');

// 回調函數的形式
// fs.readFile('./tt.txt', (err, data) => {
//   // 如果錯誤，就拋出錯誤
//   if (err) throw err;
//   console.log(data.toString());
// });

let p = new Promise((resolve, reject) => {
  fs.readFile('./tt.txt', (err, data) => {
    // 如果出錯
    if (err) reject(err);
    // 如果成功
    resolve(data);
  });
});

// 調用 then
p.then(
  (value) => {
    console.log(value.toString());
  },
  (reason) => {
    console.log(reason);
  }
);
