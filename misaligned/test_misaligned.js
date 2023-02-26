const { expect } = require("chai");
const func_print = require("./misaligned");

result = func_print.print_color_map();

expect(result).equals(5);

expect(result).equals(25);
console.log("All is well (maybe!)");