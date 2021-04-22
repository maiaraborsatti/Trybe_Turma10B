const myRemove = require('./Parte1_exercicio2');

test('Verificar retorna o array esperado', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('Verificar se não retorna o mesmo array', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('Verificar se o array passado por parâmetro não sofreu alterações', () => {
  expect(myRemove([1, 2, 3, 4], 8)).toEqual([1, 2, 3, 4]);
});

test('Verificar retorna o array esperado sem alterações', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});
