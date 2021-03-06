// 1. 引入 express
const express = require('express');

// 2. 創建應用物件
const app = express();

// 3. 創建路由規則
// request 是對請求的封裝
// response 是對回應的封裝
app.get('/server', (request, response) => {
  // 設置回應頭 設置允許跨域
  response.set('Access-Control-Allow-Origin', '*');
  response.send('hello ajax - 2');
});

// 接收任意類型請求
app.all('/server', (request, response) => {
  // 設置回應頭 設置允許跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 允許任意請求頭
  response.setHeader('Access-Control-Allow-Headers', '*');
  response.send('hello ajax POST');
});

app.all('/json-server', (request, response) => {
  // 設置回應頭 設置允許跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  const data = {
    name: 'Link'
  };

  let str = JSON.stringify(data);

  response.send(str);
});

// 針對ie緩存問題
app.get('/ie', (request, response) => {
  // 設置回應頭 設置允許跨域
  response.set('Access-Control-Allow-Origin', '*');
  response.send('hello IE');
});

// 延遲響應
app.all('/delay', (request, response) => {
  // 設置回應頭 設置允許跨域
  response.set('Access-Control-Allow-Origin', '*');

  setTimeout(() => {
    response.send('延遲響應');
  }, 3000);
});

// jquery 服務
app.all('/jquery', (request, response) => {
  // 設置回應頭 設置允許跨域
  response.set('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');

  // response.send('Hello JQuery ajax')
  const data = {
    name: 'Link'
  };
  response.send(JSON.stringify(data));
});

// axios 服務
app.all('/axios', (request, response) => {
  // 設置回應頭 設置允許跨域
  response.set('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');

  // response.send('Hello axios');
  const data = {
    name: 'Link'
  };
  response.send(JSON.stringify(data));
});

// fetch 服務
app.all('/fetch', (request, response) => {
  // 設置回應頭 設置允許跨域
  response.set('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');

  // response.send('Hello fetch');
  const data = {
    name: 'Link'
  };
  response.send(JSON.stringify(data));
});

// jsonp
app.all('/jsonp', (request, response) => {
  const data = {
    say: 'hello jsonp'
  };

  let str = JSON.stringify(data);

  response.end(`handle(${str})`);
});

// 4. 監聽端口啟動服務
app.listen(8000, () => {
  console.log('服務已經啟動, 8000端口監聽中...');
});
