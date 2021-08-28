const readline = require('readline-sync');

function sorteio () {
  const numeroEscolhido = readline.questionInt("Escolha um número de 0 a 10: ");

  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const numeroSorteado = Math.floor(Math.random() * (10 - 0)) + 0;
  
  // Outra forma de gerar um número inteiro aleatório
  // const numeroSorteado = parseInt(Math.random() * 10);
  
  if(numeroEscolhido === numeroSorteado){
    return console.log("Parabéns, número correto!")
  }
  return console.log(`Opa, não foi dessa vez. O número era ${numeroSorteado}`)
};

sorteio();
