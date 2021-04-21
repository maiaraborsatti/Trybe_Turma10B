const myFizzBuzz = require('./Parte1_exercicio4');

it('Verificar se a chamada com um número divisível por 3 e 5 traz o retorno é o esperado', () => {
  expect(myFizzBuzz(15)).toEqual('fizzbuzz');
});

it('Verificar se a chamada com um número divisível por 3 traz "fizz"', () => {
  expect(myFizzBuzz(9)).toEqual('fizz');
});

it('Verificar se a chamada com um número divisível por 5 traz "buzz"', () => {
  expect(myFizzBuzz(10)).toEqual('buzz');
});

it('Verificar se a chamada com um número não divisível por 3 ou 5 retorna ao número', () => {
  expect(myFizzBuzz(17)).toEqual(17);
});

it('Verificar se a chamada com um parâmetro que não é número retorna false', () => {
  expect(myFizzBuzz('n')).toBeFalsy();
});
