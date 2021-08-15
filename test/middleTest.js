const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const oddArray = [33, 5, 8, 9, 63];
const evenArray = [33, 5, 8, 9, 63, 89];


describe("#middle", () => {
  it("returns [8] for [33, 5, 8, 9, 63]", () => {
    assert.deepEqual(middle(oddArray), [8]);
  });
  it("returns [8, 9] for [33, 5, 8, 9, 63, 89]", () => {
    assert.deepEqual(middle(evenArray), [8, 9]);
  });
});

