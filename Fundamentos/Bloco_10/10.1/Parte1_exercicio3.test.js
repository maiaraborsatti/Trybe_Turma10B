const myRemoveWithoutCopy = require('./Parte1_exercicio3');

test('Verificar retorna o array esperado', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('Verificar se não retorna o mesmo array', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('Verificar se o array passado por parâmetro não sofreu alterações', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 8)).toEqual([1, 2, 3, 4]);
});

test('Verificar retorna o array esperado sem alterações', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});