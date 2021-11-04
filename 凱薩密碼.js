// 新版

const offset = parseInt(prompt('密鑰: '));
const lightWord = prompt('明文: ');
let darkWord = '';

for (let i = 0; i < lightWord.length; i++) {
  if (lightWord[i].charCodeAt() === 32) {
    darkWord += ' ';
    continue;
  }

  let codeTransfer = ((lightWord[i].charCodeAt() - 97 + offset) % 26) + 65;

  darkWord += String.fromCharCode(codeTransfer);
}

console.log(darkWord);
