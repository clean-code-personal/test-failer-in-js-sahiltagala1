const export_function = require('./pp')

export_function.alertInCelcius(400.5);
export_function.alertInCelcius(303.6);
console.log(`${export_function.alertFailureCount} alerts failed.`);
console.log("All is well (maybe!)");
console.assert(export_function.alertFailerCount);
