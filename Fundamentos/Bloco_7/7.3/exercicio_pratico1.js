const assert = require('assert');
const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error ('parameters must be numbers');
  }
  return a + b;
}

// Verifica se é uma função:
assert.strictEqual(typeof sum, 'function');

// 1. A função sum(a, b) retorna a soma do parâmetro a com o b:
assert.strictEqual(sum(2, 3), 5);

// 3. Teste se o retorno de sum(0, 0) é 0:
assert.strictEqual(sum(0, 0), 0);

// 4. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
assert.throws(() => { sum(4, "5"); });

// 5. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => { sum(4, "5"); }, /^Error: parameters must be numbers$/);
