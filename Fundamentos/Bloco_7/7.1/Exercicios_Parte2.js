/* 1. Crie uma função que receba um número e retorne seu fatorial.
- Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
- Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator. */
const fatorial = numero => {
  let resultado = 1
  for (let index = 2; index <= numero; index += 1) {
      resultado *= index;
  }
  return resultado;
}
console.log(fatorial(6))

// Bonus: gabarito
const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.
// const maiorPalavra = frase => {

// }