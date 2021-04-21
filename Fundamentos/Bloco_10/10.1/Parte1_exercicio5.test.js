const objs = require('./Parte1_exercicio5');
console.log(objs);

it('Comparar dois objetos e verificar se são iguais', () => { 
  expect(objs[0]).toEqual(objs[1])
});

it('Comparar dois objetos e verificar se são iguais', () => { 
  expect(objs[0]).not.toEqual(objs[2])
});