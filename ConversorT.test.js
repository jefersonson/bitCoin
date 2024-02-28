const ConversorT = require('./index');

describe('Testa função de conversão de temperatura de Celcius para Fahrenheit', () => {
  test('Testar se ouve uma convertido para Fahrenheit', () => {
    expect(ConversorT(10)).toBe(50);
  });
});