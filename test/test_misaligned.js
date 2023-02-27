const { expect } = require("chai");
const func = require("../misaligned/misaligned");

result = func.print_color_map();

expect(result).equals(5);

expect(result).equals(25);
console.log("All is well (maybe!)");