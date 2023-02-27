const { expect } = require("chai");
const func = require("../misaligned/misaligned");

result = func.print_color_map();
expect(func.index(0,0)).equals(1);
expect(result).equals(25);
console.log("All is well (maybe!)");