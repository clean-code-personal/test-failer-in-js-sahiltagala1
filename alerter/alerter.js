let alertFailureCount = 0;
module.exports = {alertFailureCount};

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
    alertFailureCount += 0;
  }
}

module.exports = new func_alert();
function func_alert(){
    return{
        alertInCelcius:alertInCelcius
    }
}
