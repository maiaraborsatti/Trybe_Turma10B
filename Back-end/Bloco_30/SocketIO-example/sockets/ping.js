module.exports = (io) => {
  io.on('connection', (socket) => {

    socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter doce :)');

    console.log(`Usuário conectado. ID: ${socket.id} `);

    socket.on('ping', () => {
      console.log(`${socket.id} emitiu um ping também!`);
      io.emit('pong', `${socket.id} enviou um ping também!`); // essa linha envia um aviso para o cliente que o ping chegou.
    });
  });
};
