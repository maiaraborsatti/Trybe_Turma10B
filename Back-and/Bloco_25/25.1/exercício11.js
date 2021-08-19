// Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020.

db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] },
      dataVenda: { $gte: ISODate('2020-01-01'), $lte: ISODate('2020-03-31') }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      totalCompras: { $sum: 1 }
    }
  },
  {
    $match: {
      totalCompras: { $lt: 3 }
    }
  },
  {
    $group: {
      _id: null,
      clientes: { $sum: 1 }
    }
  },
  { 
    $project: { _id: 0 } 
  }
]);

// ou

db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] },
      dataVenda: { $gte: ISODate('2020-01-01'), $lte: ISODate('2020-03-31') }
    }
  },
  {
    $group: {
      _id: "$clienteId",
      totalCompras: { $sum: 1 }
    }
  },
  {
    $match: {
      totalCompras: { $lt: 3 }
    }
  },
  {
    $count: 'clientes'
  }
]);
