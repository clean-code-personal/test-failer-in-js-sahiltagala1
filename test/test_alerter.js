const{assert} = require("chai");
const { it } = require("mocha");
const func = require("../alerter/alerter");

func.alertFailerCount = func.alertInCelcius(400.5);
func.alertFailerCount = func.alertInCelcius(303.6);

describe("Test cases", function () {
  it("alert failure count", function () {
    assert.equal(func.alertFailureCount, 1);
  });
});
