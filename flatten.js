const assertEqual = function(param1, param2) {

  if (eqArrays(param1, param2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${param1}  ===  ${param2}`);
  } else {
    console.log(`🚫 🚫 🚫Assertion Failed: ${param1} !== ${param2}`);
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

// const flatten = function(array) {
//   let newArray = [].concat.apply([], array);
//   console.log(newArray);
//   return newArray;
 
//    };



//flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]


const flatten = function(array) {
  let newArray = [];
  array.forEach(function(element) {
    if (!Array.isArray(element)) {
      newArray.push(element)
    } else {
      element.forEach(function(innerElement) {
        newArray.push(innerElement)
      })
    }
  })
  // return newArray;
  console.log(newArray);
}

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]