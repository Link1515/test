// 1. 引入 express
const express = require('express');

// 2. 創建應用物件
const app = express();

// 3. 創建路由規則
// request 是對請求的封裝
// response 是對回應的封裝
app.get('/server', (request, response) => {
  // 設置回應頭 設置允許跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.send('hello ajax');
});

// 4. 監聽端口啟動服務
app.listen(8000, () => {
  console.log('服務已經啟動, 8000端口監聽中...');
});
