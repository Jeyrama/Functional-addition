/*
Create a function add(n)/Add(n) which returns a function that always adds n to any number.

Examples:
  let addOne = add(1);
  addOne(3); // 4

  let addThree = add(3);
  addThree(3); // 6
*/


// Solution 

function add(n) {
  return function (m) {
    return n+m;
  }
}

// or

const add = (n) => {
  return (x) => {
    return n+x;
  }
}