const assert = require('chai').assert;
const tail = require('../tail');
const arr = ["Hello", "Lighthouse", "Labs"];
const result = tail(arr);

console.log("Result:..... ", result);

describe("#tail", () => {
  it("returns result.length, 2", () => {
    assert.deepEqual(result.length, 2);
  })
})


//const result = tail(["Hello", "Lighthouse", "Labs"]);
/*assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");*/