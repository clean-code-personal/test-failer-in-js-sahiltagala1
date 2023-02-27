var alertFailureCount = 0;

function networkAlertStub(celcius) {
  console.log(`Alert! Temperature is ${celcius} degrees`);
    if (celcius < 200) {
        return 200;
    } else {
        return 500;
    }
}

function alertInCelcius(farenheit) {
  const celcius = ((farenheit - 32) * 5) / 9;
  const returnCode = networkAlertStub(celcius);
  if (returnCode != 200) {
    alertFailureCount += 1;
  }
}

module.exports = {alertFailureCount, alertInCelcius};
