const { expect } = require("chai");
const { it } = require("mocha");
const func = require("../misaligned/misaligned");

result = func.print_color_map();

describe("Color Map Print", function () {
  it("should return 25", function () {
    expect(result).equals(25);
  });
  it("should return first index as 1", function () {
    expect(func.index(0,0)).equals('1 ');
  });
});
