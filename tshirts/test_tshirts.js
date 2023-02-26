const { expect } = require("chai");
const func_tshirt = require("./tshirts")

expect(func_tshirt.size(38)).equals("M");


expect(func_tshirt.size(37)).equals("S");
expect(func_tshirt.size(40)).equals("M");
expect(func_tshirt.size(43)).equals("L");
console.log("All is well (maybe!)");

