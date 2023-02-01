import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function DetailsGPT({
  setOrder,
  setCheck,
  detailInfo,
  requestList,
  Order,
  produtosMock,
}) {
  const requestInfo = requestList.find((elem) => elem.id === Order);
  const detailSelect = detailInfo.filter((elem) => elem.sale_id === Order);
  const [orderStatus, setOrderStatus] = useState(requestInfo.status);

  const clickHere = () => {
    setCheck(false);
    setOrder('');
  };

  return (
    <div>
      <p>
        Pedido
        {requestInfo.id}
      </p>
      <p data-testid="seller_order_details__element-order-details-label-delivery-status">
        {orderStatus}
      </p>
      { orderStatus === 'pendente' ? (
        <button type="button" onClick={ () => setOrderStatus('preparando') }>
          Preparar pedido
        </button>
      ) : null}
      {orderStatus === 'pendente' || orderStatus === 'preparando' ? (
        <button type="button" onClick={ () => setOrderStatus('saiu') }>
          Saiu para Entrega
        </button>
      ) : null}
      {orderStatus === 'saiu' || orderStatus === 'preparando' ? (
        <button type="button" onClick={ () => setOrderStatus('entregue') }>
          Pedido foi Entregue
        </button>
      ) : null}
      <table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço Unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {detailSelect.map((elem, index) => {
            const product = produtosMock.find((item) => item.id === elem.product_id);
            return (
              <tr key={ elem.product_id }>
                <td>
                  {index + 1}
                </td>
                <td>
                  {product.name}
                </td>
                <td>{elem.quantity}</td>
                <td>{elem.price}</td>
                <td>{elem.quantity * elem.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="button" onClick={ clickHere }>
        Voltar
      </button>
    </div>
  );
}
DetailsGPT.propTypes = {
  setOrder: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
  detailInfo: PropTypes.arrayOf({
    type: PropTypes.shape({
      sale_id: PropTypes.number.isRequired,
      product_id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  }).isRequired,
  requestList: PropTypes.arrayOf({
    type: PropTypes.shape({
      id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      seller_id: PropTypes.number.isRequired,
      total_price: PropTypes.number.isRequired,
      delivery_adress: PropTypes.string.isRequired,
      delivery_number: PropTypes.string.isRequired,
      sale_date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }),
  }).isRequired,
  produtosMock: PropTypes.arrayOf({
    type: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      url_image: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  Order: PropTypes.number.isRequired,
};
