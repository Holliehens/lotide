const assertArraysEqual = function(param1, param2) {

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



const letterPositions = function(sentence) {
  let results = {};
  //let letter = '';
  for (let i = 0; i < sentence.length; i ++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      if (sentence[i] === ' ')continue 
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
    
  }
  

  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);