const ConversorDeTemperatura = (Celcius) => {
    const Fahrenheit = (Celcius * 1.8) + 32;
    return Fahrenheit;
  };
  module.exports = ConversorDeTemperatura;
  console.log(ConversorDeTemperatura(10));
  