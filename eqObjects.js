//Compare 2 objects & return T or F based on a perfect match

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🚫 🚫 🚫Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //Do the Objects have the same number of keys?
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  //The value for each key in one object is the same as the value for that same key in the other object
  for (const key in object1) {
    console.log(object1[key], object2[key]);
    if (object1[key] !== object2[key]) {
      return false;
    } else {
      console.log("values in the keys");
    }
  }
  return true;
};

//console.log(object1);
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc));
