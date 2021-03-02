//OBJETOS:

//1. Criar um objeto player.
let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
}
 //2. Concatenar as informações para fazer um console.log
console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");

//3. Adicionar ao objeto a chave bestInTheWorld e atribua a esta chave um array
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

//4. Acessar a chave bestInTheWorld e faça um console.log 
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes.");

//5. Acesse a chave medals e faça um console.log
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.")