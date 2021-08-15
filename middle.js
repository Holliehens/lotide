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

const middle_old = function (array) {
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

const middle = function(array) {
  const arrLength = array.length;
  let result = [];
  if (arrLength % 2 === 1) {
    const middleIndex = (arrLength - 1) / 2;
    const middleValue = array[middleIndex];
    result.push(middleValue);
  } else {
    const middleIndex2 = arrLength / 2;
    const middleIndex1 = middleIndex2 - 1;
    const middleValue1 = array[middleIndex1];
    const middleValue2 = array[middleIndex2];
    result.push(middleValue1, middleValue2);
  }
  //console.log('Results middle ------ ', result);
  return result;
}

middle([6, 7, 8, 9, 13, 77, 54, 44,]);
module.exports = middle;
// ARRAYS WITH ODD NUMBER OF ELEMENTS:
// [3, 4, 5] : length = 3, middleValue = 4, middleIndex = 1,|| middleIndex = (3 - 1)/2= 1
// [3, 4, 5, 6, 7, 8, 9] : length = 7, middleValue = 6, middleIndex = 3
// middleIndex = (length - 1) / 2

// ARRAYS WITH EVEN NUMBER OF ELEMENTS:
// [6, 7, 76, 45] : Length = 4, middleValue = 7, 76, middleIndex = 1, 2
// [23, 5, 6, 98, 4, 1] : Length = 6, middlevalue = 6, 98, middleIndex = 2, 3
// middleIndex2 = (length / 2)
// middleIndex1 = middleIndex2 - 1
