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

// Parte III - Object.values
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }
  return skills;
};
// Sem Object.values
console.log(listSkillsWithFor(student));

const listSkillsWithValues = (student) => Object.values(student);
// Com Object.values
console.log(listSkillsWithValues(student));

// Parte IV - Object.entries
const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
// Retorna um arrey de arrey
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

// Apresentar separadamente:
for(index in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

// Parte V - Object.assign
const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }
console.log(lastName);


const newPerson = Object.assign({},person,lastName); // { lastName: 'Silva' }
newPerson.name = 'Gilberto';
console.log(newPerson); // { name: 'Gilberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }


