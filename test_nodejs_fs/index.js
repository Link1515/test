const fs = require('fs');

// 非同步讀檔
// fs.readFile('tt.txt', (err, data) => {
//   if (err) throw err

//   console.log(data.toString())
// })

// 同步讀檔
// const data = fs.readFileSync('tt.txt', 'utf8')
// console.log(data)

// 寫入資料
fs.writeFile('tt.txt', '大家好2', (err) => {
  if (err) throw err;
});
fs.writeFile('tt2.txt', '哈哈哈', (err) => {
  if (err) throw err;
  else console.log('檔案創建成功');
});
