const ConversorDeBitcoin = require('./att');

describe('Testa função de conversão de bitcoin para real', () => {  
  test('Testar se o valor foi convertido para real', () => {
    expect(ConversorDeBitcoin(5)).toBe(1504.1599999999999);
  });
});
