let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1. Percorrer o array imprimindo todos os valores nele contidos com a função console.log()

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }

//2. Somar todos os valores contidos no array e imprimir o resultado
let soma = 0;

for (let i = 0; i < numbers.length; i++) {
    soma = numbers[i] + soma;
  }
console.log(soma);

//3. Calcular e imprimir a média aritmética dos valores contidos no array
let media = 0;
let resultado;
for (let i = 0; i < numbers.length; i++) {
    media = numbers[i] + media;
    }
resultado = media / numbers.length;
console.log(resultado);

//4. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
if (resultado > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20") 
}

//
