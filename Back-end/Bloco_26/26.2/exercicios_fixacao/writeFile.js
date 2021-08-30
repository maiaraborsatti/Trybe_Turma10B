const fs = require('fs').promises;

/* fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }); */


// Com async / await

/* async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão usando async / await');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main() */


// A flag wx abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado
fs.writeFile('./meu-novo-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
  .then(() => {
    console.log('Arquivo salvo');
  })
  .catch((err) => {
    // Se o arquivo existir, um erro é retornado
    console.error(err);
  });
