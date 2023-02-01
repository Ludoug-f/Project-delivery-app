// export
const pedidosMock = [
  {
    id: 1,
    user_id: 3,
    seller_id: 1,
    total_price: 7.50,
    delivery_adress: 'Av brTrybe',
    delivery_number: '123456',
    sale_date: '31/01/2023',
    status: 'pendente',
  },
  {
    id: 2,
    user_id: 3,
    seller_id: 1,
    total_price: 17.20,
    delivery_adress: 'Av Zé Birita',
    delivery_number: '0800',
    sale_date: '01/01/2023',
    status: 'preparando',
  },
  {
    id: 3,
    user_id: 3,
    seller_id: 1,
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

const produtosMock = [
  {
    id: 0,
    name: 'Skol Lata 250ml',
    price: 2.20,
    url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  },
  {
    id: 1,
    name: 'Heineken 600ml',
    price: 7.50,
    url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
  },
  {
    id: 2,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
  },
  {
    id: 3,
    name: 'Brahma 600ml',
    price: 7.50,
    url_image: 'http://localhost:3001/images/brahma_600ml.jpg',
  },
  {
    id: 4,
    name: 'Skol 269ml',
    price: 2.19,
    url_image: 'http://localhost:3001/images/skol_269ml.jpg',
  },
  {
    id: 5,
    name: 'Skol Beats Senses 313ml',
    price: 4.49,
    url_image: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg',
  },
];

// export default { pedidosMock, detailsMock };
export { pedidosMock, detailsMock, produtosMock };
