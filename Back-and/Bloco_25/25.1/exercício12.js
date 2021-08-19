// Descubra quais as três uf s que mais compraram no ano de 2020.

db.vendas.aggregate([
  {
    $match: {
      status: { $in: ["ENTREGUE", "EM SEPARACAO"] },
      dataVenda: { $gte: ISODate('2020-01-01'), $lte: ISODate('2020-12-31') }
    }
  },
  {
    $lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'infoCliente'
    }
  },
  {
    $unwind: "$infoCliente"
  },
  {
    $group: {
      _id: "$infoCliente.endereco.uf",
      totalVendas: { $sum: 1 }
    }
  },
  {
    $sort: {
      totalVendas: -1
    }
  },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1
    }
  }
]);
