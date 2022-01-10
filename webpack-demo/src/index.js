// import _ from 'lodash';
// import './log.js';
const _ = require('lodash');
require('./log.js');

function component() {
  const element = document.createElement('div');

  // Lodash, now import by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
