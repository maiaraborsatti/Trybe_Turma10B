// Para fixar vamos praticar com os seguintes exercícios:
// 1. Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!');
const primeiraClasse1 = () => console.log('Acordando!!');
primeiraClasse1();

// 2. Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
const primeiraClasse2 = () => console.log('Bora tomar café!!');
primeiraClasse2();

// 3. Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
const primeiraClasse3 = () => console.log('Partiu dormir!!');
primeiraClasse3();

// 4. Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores.
const doingThings = (acao) => acao();

// Ao chamar a função doingThings, ela deve retornar o valor do respectivo parâmetro
doingThings(primeiraClasse1);
