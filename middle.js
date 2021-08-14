const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;  
};

const middle = function (array) {
  let newArray = array;
  for (let i = 0; i < array.length; i++) {
    if (array.length < 3) {
      let newArray = [];
      console.log(newArray);
      return newArray;
    }
    if (array.length % 2 === 0) {
      return newArray.splice((array.length / 2) -1, 2);
      
    } else {
    return newArray.splice(Math.ceil(array.length / 2)-1, 1);
    }


}
};

module.exports = middle;
