//1. Fazer um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n
let n = 5;
let icone = '*';
let conteudoLinha = '';

for (let qtdIcone = 0; qtdIcone < n; qtdIcone += 1) {
  conteudoLinha = conteudoLinha + icone;
};
for (let qtdLinha = 0; qtdLinha < n; qtdLinha += 1) {
  console.log(conteudoLinha);
};

//2. Fazer o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
let conteudoLinha2 = '';

for (let qtdLinha = 0; qtdLinha <= n; qtdLinha += 1) {
    console.log(conteudoLinha2);
    conteudoLinha2 = conteudoLinha2 + icone
  };

//3. 