//1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n
let n = 5;
let icone = '*';
let linha = '';

for (let qtdIcone = 0; qtdIcone < n; qtdIcone += 1) {
  linha = linha + icone;
};
for (let qtdLinha = 0; qtdLinha < n; qtdLinha += 1) {
  console.log(linha);
};