const readline = require('readline-sync');

function calculoVelocidade() {
  const distancia = readline.questionInt("Qual a distancia(m): ");
  const tempo = readline.questionInt("Qual o tempo(s): ");
  const velocidadeMedia =  (distancia / tempo).toFixed(2);

  console.log({distancia, tempo, velocidade: `Sua velocidade média é: ${velocidadeMedia}m/s` })
};

calculoVelocidade();
