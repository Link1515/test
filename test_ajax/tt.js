// 1. 引入 express
const express = require('express');

// 2. 創建應用物件
const app = express();

// 3. 創建路由規則
// request 是對請求的封裝
// response 是對回應的封裝
app.get('/', (request, response) => {
  response.send('hello express!');
});

// 4. 監聽端口啟動服務
app.listen(8000, () => {
  console.log('服務已經啟動, 8000端口監聽中...');
});
