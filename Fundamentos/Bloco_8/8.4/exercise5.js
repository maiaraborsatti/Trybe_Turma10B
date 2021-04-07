// 5. Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra A maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const string = names.join('').split('');
  const contA = string.reduce((acc, name) => name === 'A' || name === 'a' ? acc + 1 : acc, 0);
  return contA;
}

// console.log(containsA());
assert.deepStrictEqual(containsA(), 20);