const express = require('express');
const path = require('path');

const app = express();

const myLogger = (req, res, next) => {
  console.log('logged');
  next();
};

app.use(myLogger);
app.get('/', (req, res) => {
  res.send('hi');
});

app.get('/aaa', (req, res) => {
  res.send('aaa');
});

app.listen(3000, () => {
  console.log('server running');
});
