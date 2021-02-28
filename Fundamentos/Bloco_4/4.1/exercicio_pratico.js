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
if (c >= 0) {
    console.log("positive"); 
} else if (c < 0) {
    console.log("negative"); 
} else {
    console.log("zero")
}    

//5. Criar um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let soma = a + b + c
let angulo = 180

if (soma > 0 && soma == angulo) {
    console.log(true); 
} else if (soma > 0 && soma !== angulo) {
    console.log(false); 
} else {
    console.log("Erro");
} 

//6. Criar um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let peca = "Rei";

switch (peca.toLowerCase()) {
    case "torre":
    console.log("Horizontais");
    break;

    case "cavalo":
        console.log("em L");
        break;
        
    case "bispo":
        console.log("diagonal");
        break;

    case "rainha":
        console.log("horizontal, vertical e diagonal");
        break;
    
    case "rei":
        console.log("horizontal, vertical e diagonal");
        break;

    default:
    console.log("Essa peça não existe no jogo!")

}