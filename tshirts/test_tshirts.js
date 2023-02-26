const { expect } = require("chai");
const func = require("./tshirts")

expect(func.size(38)).equals("M");


expect(func.size(37)).equals("S");
expect(func.size(40)).equals("M");
expect(func.size(43)).equals("L");
console.log("All is well (maybe!)");
