let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe'); // adiciona mais uma tarefa ao final da lista
console.log(tasksList); // ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.unshift('escovar os dentes'); // adiciona mais uma tarefa ao inico da lista
console.log(tasksList); // ['escovar os dentes', 'Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.pop();  // remove a última tarefa
console.log(tasksList); // ['escovar os dentes', 'Tomar café', 'Reunião', 'Brincar com o cachorro']

tasksList.shift(); // remove a primeira tarefa
console.log(tasksList); // ['Tomar café', 'Reunião', 'Brincar com o cachorro']

let indexOfTask = tasksList.indexOf('Reunião'); //procura o índice de um item no Array
console.log(indexOfTask); //1

//---------------------------------------------------------
//Exercício 1 - Obtenha o valor "Serviços" do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercício 2 - Procure o índice do valor "Portfólio" do array menu:
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Exercício 3 - Adicione o valor "Contato" no final do array menu:
menu.push('Contato');

console.log(menu);