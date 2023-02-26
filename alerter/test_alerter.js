const{alertFailerCount} = require("./alerter");
const func_alert = require("./alerter");

func_alert.alertInCelcius(400.5);
func_alert.alertInCelcius(303.6);
console.log(`${func_alert.alertFailureCount} alerts failed.`);
console.log("All is well (maybe!)");
console.assert(alertFailerCount);
