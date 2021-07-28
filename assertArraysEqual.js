const assertEqual = function(actual, expected) {

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

assertEqual([1, 2, 3], [1, 2, 3]);

assertEqual([1, 2, 3], [3, 2, 1]); 

assertEqual(["1", "2", "3"], ["1", "2", "3"]); 
assertEqual(["1", "2", "3"], ["1", "2", 3]);