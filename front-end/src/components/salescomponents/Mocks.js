// export
const pedidosMock = [
  {
    id: 1,
    uder_id: 1,
    seller_id: 2,
    total_price: 7.50,
    delivery_adress: 'Av brTrybe',
    delivery_number: '123456',
    sale_date: '31/01/2023',
    status: 'pendente',
  },
  {
    id: 2,
    uder_id: 1,
    seller_id: 2,
    total_price: 17.20,
    delivery_adress: 'Av Zé Birita',
    delivery_number: '0800',
    sale_date: '01/01/2023',
    status: 'preparando',
  },
  {
    id: 3,
    uder_id: 1,
    seller_id: 2,
    total_price: 25.46,
    delivery_adress: 'Rua dos Bobos número 0',
    delivery_number: '000',
    sale_date: '03/02/2023',
    status: 'entregue',
  },
];

// export
const detailsMock = [
  {
    sale_id: 1,
    product_id: 1,
    quantity: 1,
  }, {
    sale_id: 2,
    product_id: 3,
    quantity: 2,
  }, {
    sale_id: 2,
    product_id: 0,
    quantity: 1,
  }, {
    sale_id: 3,
    product_id: 3,
    quantity: 1,
  }, {
    sale_id: 3,
    product_id: 5,
    quantity: 4,
  },
];

// export default { pedidosMock, detailsMock };
module.exports = { pedidosMock, detailsMock };
