function numeroAleatorio () {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  return [a, b, c]
};

// console.log(numeroAleatorio());

function doMath([a, b, c]) {
  return new Promise((resolve, reject) => {
    /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');
      
    const result = (a + b) * c;

    if (result < 50) {
      return reject('Valor muito baixo');
    }

    resolve(result);
  });
}

// console.log(doMath(numeroAleatorio()));

doMath(numeroAleatorio())
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error.message));

  doMath("l")
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error.message));
