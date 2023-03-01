const { assert } = require("chai");
const {describe ,it} = require("mocha");
const {fatchAlertFailerCounter, alertInCelcius} = require("../alerter/alerter");

describe("Test cases", function () {
  it("alert failure count", function () {
    alertInCelcius(400.5);
    alertInCelcius(303.6);
    alertInCelcius(500.3);
    assert.equal(fatchAlertFailerCounter(), 2);
  });
});
