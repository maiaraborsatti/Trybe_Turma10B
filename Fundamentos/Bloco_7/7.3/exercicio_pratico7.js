// Escreva a função wordLengths para passar nos testes já implementados.

const assert = require('assert');
const wordLengths = (array) => {
  let resultado = [];
  let contador = 0;
  for (const paravra in array) {
    for (const letra in paravra) {      
      
  
    } 
  
  }
  
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);