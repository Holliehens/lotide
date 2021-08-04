const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);

const assertArraysEqual = function (param1, param2) {
  if (eqArrays(param1, param2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${param1}  ===  ${param2}`);
  } else {
    console.log(`🚫 🚫 🚫Assertion Failed: ${param1} !== ${param2}`);
  }
};

const eqArrays = function (array1, array2) {
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
const numbers = [1, 2, 3];

console.log(map(numbers, num => num * 2)); //expected: [2, 4, 6]
assertArraysEqual((map(numbers, num => num * 2)), [2, 4, 6]);
assertArraysEqual((map(numbers, num => num * 2)), [2, 4, 8]);