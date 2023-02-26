const {assert} = require("chai");
const { it } = require("mocha");

let func = require("../tshirts/tshirts");

describe("Test cases", function () {
  it('should return "S" when the value is 37', function () {
    assert.equal(func.size(37), "S");
  });
  it('should return "M" when the size is 41', function () {
    assert.equal(func.size(41), "M");
  });
  it('should return "L" when the size is 43', function () {
    assert.equal(func.size(43), "L");
  });
  it('should return "S" when the value is 38', function () {
    assert.equal(func.size(38), "M");
  });
});