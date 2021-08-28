const readline = require('readline-sync');

function calculoIMC() {
  const peso = readline.questionFloat("Qual seu peso?");
  const altura = readline.questionFloat("Qual sua altura?");
  const IMC =  peso / (altura * altura);

  console.log({peso, altura, IMC})
}

calculoIMC();