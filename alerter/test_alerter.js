const{assert} = require("chai");
const alertFailerCount = require("./alerter");
const func = require("./alerter");

func.alertInCelcius(400.5);
func.alertInCelcius(303.6);
console.log(`${alertFailerCount} alerts failed.`);
console.log("All is well (maybe!)");
console.assert(alertFailerCount);

assert.equal(alertFailerCount,1);
