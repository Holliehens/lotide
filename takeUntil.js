const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};

const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

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
const numbers = [7, 7, 10, -10, 12, 14];
const diaryEntry = ["Dear", "Diary", ","];

assertArraysEqual(
  takeUntil(data1, (x) => x < 0),
  [1, 2, 5, 7, 2]
);
assertArraysEqual(
  takeUntil(data2, (x) => x === ","),
  ["I've", "been", "to", "Hollywood"]
);
assertArraysEqual(
  takeUntil(numbers, (x) => x < 0),
  [7, 7, 10]
);
assertArraysEqual(
  takeUntil(diaryEntry, (x) => x === ","),
  ["Dear", "Diary"]
);
