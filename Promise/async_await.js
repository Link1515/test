const fs = require('fs');
const util = require('util');

const myReadFile = util.promisify(fs.readFile);

async function main() {
  const data1 = await myReadFile('./tt.txt');
  const data2 = await myReadFile('./tt2.txt');
  const data3 = await myReadFile('./tt3.txt');

  console.log(data1 + data2 + data3);
}

main();
