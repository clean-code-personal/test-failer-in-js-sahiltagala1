let alertFailureCount = 0;

const { assert } = require("chai");
const { it } = require("mocha");
const func = require("../alerter/alerter");

func.alertInCelcius(400.5);
func.alertInCelcius(303.6);

describe("Test cases", function () {
  it("alert failure count", function () {
    assert.equal(alertFailureCount, 1);
  });
});
