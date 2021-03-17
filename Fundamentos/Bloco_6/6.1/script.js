function addEstados() {
  const estados = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (key of estados) {
    const opcao = document.createElement('option');
    const estado = document.getElementById('estado');
    estado.appendChild(opcao).innerText = key;
  }
} 
addEstados();

