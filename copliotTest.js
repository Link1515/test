function count(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
    }
  }
  return count;
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return Math.pow(a, b);
}

function factorial(a) {
  var result = 1;
  for (var i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
}

function fibonacci(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function reverse(str) {
  var result = '';
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function arraySum(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

function arrayProduct(arr) {
  var result = 1;
  for (var i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

function arrayMax(arr) {
  var result = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

function objectSize(obj) {
  var count = 0;
  for (var key in obj) {
    count++;
  }
  return count;
}

function objectKeys(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }
  return keys;
}
