const express = require('express');
const path = require('path');

const app = express();

app.get('/user/:id', (req, res, next) => {
  console.log(req.originalUrl)
  next()
}, (req, res, next) => {
  console.log(req.params)
  next()
})

app.get('/user/:id', (req, res) => {
  // end 
  res.sendStatus(200)
})

app.listen(3000, () => {
  console.log('server running');
});
