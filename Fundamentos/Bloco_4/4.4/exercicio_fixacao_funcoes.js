//Fazer com que todos modelos abaixo sejam funções:

let a = 10;
let b = 5;
let c = 15;

//1. Criação de cinco programas, um para cada operação aritmética básica, com duas variáveis, A e B.
//Adição
if (a > b) {
    console.log(a + b);
}

function sum(a, b) {
    return a + b;
  }
console.log(sum(a, b))

//Subtração
if (a > b) {
    console.log(a - b);
}

function sub(a, b) {
    return a - b;
  }
console.log(sub(a, b))

//Multiplicação
if (a > b) {
    console.log(a * b);
}

function mult(a, b) {
    return a * b;
  }
console.log(mult(a, b))

//Divisão
if (a > b) {
    console.log(a / b);
}

function div(a, b) {
    return a / b;
  }
console.log(div(a, b))

//Módulo
if (a > b) {
    console.log(a % b);
}

function mod(a, b) {
    return a % b;
  }
console.log(mod(a, b))

//2. Criação de um programa que retorne o maior de dois números.
if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

function maior(n1, n2) {
        if (n1 > n2) {
        return n1;
    } else {
        return n2;       
  }

console.log(maior(a, b))