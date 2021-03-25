const assert = require('assert');
const sum = (a, b) => a + b;

// Verifica se é uma função:
assert.strictEqual(typeof sum, 'function');

// 1. A função sum(a, b) retorna a soma do parâmetro a com o b:
assert.strictEqual(sum(2, 3), 5);

// 3. Teste se o retorno de sum(0, 0) é 0:
assert.strictEqual(sum(0, 0), 0);