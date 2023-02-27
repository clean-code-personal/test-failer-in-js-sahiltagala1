const{assert} = require("chai");
const { it } = require("mocha");
const alertFailerCount = require("../alerter/alerter");
const func = require("../alerter/alerter");

alertFailerCount = func.alertInCelcius(400.5);
alertFailerCount = func.alertInCelcius(303.6);

describe("Test cases", function () {
  it("alert failure count", function () {
    assert.equal(alertFailureCount, 2);
  });
});
