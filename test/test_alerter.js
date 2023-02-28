const { assert } = require("chai");
const {describe ,it} = require("mocha");
const {alertFailureCount, alertInCelcius} = require("../alerter/alerter");

describe("Test cases", function () {
  it("alert failure count", function () {
    alertInCelcius(400.5);
    alertInCelcius(303.6);
    assert.equal(alertFailureCount,1);
  });
});
