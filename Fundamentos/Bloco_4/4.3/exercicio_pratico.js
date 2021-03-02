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
let n2 = 5;
let icone2 = '*';
let conteudoLinha2 = '';

for (let qtdLinha = 0; qtdLinha <= n2; qtdLinha += 1) {
    console.log(conteudoLinha2);
    conteudoLinha2 = conteudoLinha2 + icone2
  };

//3. Inverta o lado do triângulo
let n3 = 5;
let icone3 = '*';
let conteudoLinha3 = '';
let preencheIcone = n3;

for (let qtdLinha = 0; qtdLinha < n3; qtdLinha += 1) {
  for (let preencheLinha = 0; preencheLinha <= n3; preencheLinha += 1) {
    if (preencheLinha < preencheIcone) {
      conteudoLinha3 = conteudoLinha3 + ' ';
    } else {
      conteudoLinha3 = conteudoLinha3 + icone3;
    } //faz o looping formando cada linha
  }
  console.log(conteudoLinha3); //imprime a linha formada acima
  conteudoLinha3 = ''; //zera a linha para recomeçar a nova com mais um *
  preencheIcone = preencheIcone - 1; //diminui 1 nº a cada repetição
};
