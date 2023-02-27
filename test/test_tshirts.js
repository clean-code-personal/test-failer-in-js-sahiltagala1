const {assert} = require("chai");
const { it } = require("mocha");

let func_size = require("../tshirts/tshirts");

describe("Test cases", function () {
  it('return "S" for 37', function () {
    assert.equal(func_size.size(37), "S");
  });
  it('return "M" for 41', function () {
    assert.equal(func_size.size(41), "M");
  });
  it('return "L" for 43', function () {
    assert.equal(func_size.size(43), "L");
  });
  it('return "M" for 38', function () {
    assert.equal(func_size.size(38), "M");
  });
});
