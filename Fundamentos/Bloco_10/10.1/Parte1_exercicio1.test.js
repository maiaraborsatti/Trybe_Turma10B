const sum = require('./Parte1_exercicio1');

test('sums two values', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('sums 0', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('Error', () => {
  expect(() => { sum(4, '5') }).toThrow();
});

test('Error', () => {
  expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
});
