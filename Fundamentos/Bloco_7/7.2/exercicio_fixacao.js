// Parte I - Adicionando novas chaves (keys)
const cliente = {
  nome: 'Maria',
  idade: 30,
  trabalho: 'Contadora',
};
console.log(cliente)

let novaChave = 'sobrenome';
const sobrenome = 'Silva';
cliente[novaChave] = sobrenome;
console.log(cliente);

novaChave = 'nomeCompleto';
const nomeCompleto = `${cliente.nome} ${cliente.sobrenome}`;
cliente[novaChave] = nomeCompleto;
console.log(cliente);

// Parte II - Object.keys
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade"

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`Habilidade: ${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);