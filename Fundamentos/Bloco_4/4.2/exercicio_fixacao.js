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