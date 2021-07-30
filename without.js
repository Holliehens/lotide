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

assertEqual([1, 2, 3], [1, 2, 3]);

assertEqual([1, 2, 3], [3, 2, 1]); 

assertEqual(["1", "2", "3"], ["1", "2", "3"]); 
assertEqual(["1", "2", "3"], ["1", "2", 3]);


const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let j = 0; j < source.length; j++) {
    if (itemsToRemove.indexOf(source[j]) === -1) {
      newArray.push(source[j]);
    }
  } 
  console.log(newArray);
  return newArray;

};
     
without([1, 2, 3], [1]); 
without(["1", "2", "3"], [1, 2, "3"]);
