const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    
    if (object1[key] !== object2[key]) {
      return false;
    
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(object1, object2) === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(object1)}  ===  ${inspect(object2)}`);
  } else {
    console.log(`🚫 🚫 🚫Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }

  


};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, ba, true);
assertObjectsEqual(ab, abc, false);