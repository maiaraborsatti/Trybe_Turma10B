const readline = require('readline-sync');

function calculoIMC() {
  const peso = readline.questionFloat("Qual seu peso?");
  const altura = readline.questionFloat("Qual sua altura?");
  const IMC =  peso / (altura * altura);

  console.log({peso, altura, IMC})

  switch (true) {
    case (IMC < 18.5):
      console.log("Abaixo do peso (magreza)");
      break;
    case (IMC >= 18.5 && IMC < 25):
      console.log("Peso normal");
      break;
    case (IMC >= 25 && IMC < 30):
      console.log("Acima do peso (sobrepeso)");
      break;
    case (IMC >= 30 && IMC < 35):
      console.log("Obesidade grau I");
      break;
    case (IMC >= 35 && IMC < 40):
      console.log("Obesidade grau II");
      break;
    default:
      console.log("Obesidade graus III e IV");
  }

}

calculoIMC();