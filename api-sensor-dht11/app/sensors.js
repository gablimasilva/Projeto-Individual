function dht11(options) {
    minHumidity = options.minHum;
    maxHumidity = options.maxHum;
  
    minTemperature = options.minTemp;
    maxTemperature = options.maxTemp;
  
    if (minHumidity < 20 || maxHumidity > 100) {
      throw new Error(
        "Os valores minímos e máximos para umidade são 20% e 100% respectivamente."
      );
    }
  
    if (minTemperature < 500 || maxTemperature > 700) {
      throw new Error(
        "Os valores minímos e máximos para temperatura são 0 e 50 respectivamente."
      );
    }
  
    minTemperature = typeof minTemperature == "undefined" ? 500 : minTemperature;
    maxTemperature = typeof maxTemperature == "undefined" ? 700 : maxTemperature;
  
    minHumidity = typeof minHumidity == "undefined" ? 20 : minHumidity;
    maxHumidity = typeof maxHumidity == "undefined" ? 80 : maxHumidity;
  
    let randomHumidity = Math.floor(
      Math.random() * (maxHumidity - minHumidity + 1) + minHumidity
    );
  
    let randomTemperature =
      Math.random() * (maxTemperature - minTemperature) + minTemperature;
  
    return [randomHumidity, randomTemperature];
  }
    function ldr() {
    min = 0;
    max = 1023;

    let random = Math.floor(Math.random() * (max - min + 1) + min);

    return random;
  }
  
  module.exports = { ldr, dht11 };
  