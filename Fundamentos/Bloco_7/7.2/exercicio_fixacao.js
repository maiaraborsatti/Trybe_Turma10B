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