//1. Criação de cinco programas, um para cada operação aritmética básica, com duas variáveis, A e B.
let a = 10;
let b = 5;

//Adição
if (a > b) {
    console.log(a + b);
}

//Subtração
if (a > b) {
    console.log(a - b);
}

//Multiplicação
if (a > b) {
    console.log(a * b);
}

//Divisão
if (a > b) {
    console.log(a / b);
}

//Módulo
if (a > b) {
    console.log(a % b);
}

//2. Criação de um programa que retorne o maior de dois números.
if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

//3. Criação de um programa que retorne o maior de três números.
let c = 15;
if ((a > b) && (a > c)) {
    console.log(a);
} else if ((b > a) && (b > c)) {
    console.log(b);
} else {
    console.log(c)
}

//4. Criação de um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
switch(c) {
    case 15:
        console.log("positive");
        break;

    case 10:
        console.log("negative");
        break;

    default:
        console.log("zero");
}
