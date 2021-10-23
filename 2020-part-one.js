const { expenses } = require('./variables');

function getExpenses() {
  let a = 0;
  let b = 0;
  let sum = 0;
  let add = 0;
  let myArray = [];

  for (var i = 0; i < expenses.length; i++) {
    a = expenses[i];
    for (let f = 0; f < expenses.length; f++) {
      b = expenses[f];
      sum = a + b;
      if (sum === 2020) {
        add = a * b;
        myArray = [...myArray, [a, b]];
      }
    }
  }

  return {
    a,
    b,
    sum,
    add,
    myArray,
  }

}

console.log(getExpenses());