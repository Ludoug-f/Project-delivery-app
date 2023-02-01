import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Details({ setOrder, setCheck, detailInfo, requestList, Order }) {
  console.log('DETAILS: ', detailInfo, 'REQUEST: ', requestList);
  const requestInfo = requestList.map((elem) => elem.id === Order);
  const detailSelect = detailInfo.map((elem) => elem.sale_id === Order);
  const [orderStatus, setOrderStatus] = useState(requestInfo.status);
  const clickHere = () => {
    setCheck(false);
    setOrder('');
  };
  return (
    <div>
      Detalhes do Produto:
      <p
        data-testid={
          `seller_order_details__element-order-details-label-order-${requestInfo.id}`
        }
      >
        Pedido
        { requestInfo.id }
      </p>
      <p
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { orderStatus }
      </p>
      { orderStatus === 'pendente' ? (
        <button
          type="button"
          onClick={ () => setOrderStatus('preparando') }
        >
          <p>
            Preparar pedido
          </p>
        </button>
      ) : null }
      { orderStatus === 'pendente' || orderStatus === 'preparando' ? (
        <button
          type="button"
          onClick={ () => setOrderStatus('saiu') }
        >
          <p>
            Saiu para Entrega
          </p>
        </button>
      ) : null }
      { orderStatus === 'saiu' || orderStatus === 'preparando' ? (
        <button
          type="button"
          onClick={ () => setOrderStatus('entregue') }
        >
          <p>
            Saiu para Entrega
          </p>
        </button>
      ) : null }
      <table>
        <tr>
          <td>Número</td>
          <td>Nome</td>
          <td>Quantidade</td>
          <td>Preço Unitário</td>
          <td>Sub-Total</td>
        </tr>
        { detailSelect.map((elem, index) => (
          <tr
            key={ elem.product_id }
          >
            <td
              data-testid={
                `seller_order_details__element-order-table-item-number-${index + 1}`
              }
            >
              { index + 1 }
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-name-${elem.product_id}`
              }
            >
              { elem.name }
            </td>
            <td>
              { elem.quantity }
            </td>
            <td>
              { elem.price }
            </td>
            <td>
              { elem.quantity * elem.price }
            </td>
          </tr>
        ))}
      </table>
      <button
        type="button"
        onClick={ () => clickHere() }
      >
        Voltar
      </button>
    </div>
  );
}

Details.propTypes = {
  setOrder: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
  detailInfo: PropTypes.arrayOf({
    type: PropTypes.shape({
      sale_id: PropTypes.number.isRequired,
      product_id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  }).isRequired,
  // requestInfo: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   user_id: PropTypes.number.isRequired,
  //   seller_id: PropTypes.number.isRequired,
  //   total_price: PropTypes.number.isRequired,
  //   delivery_adress: PropTypes.string.isRequired,
  //   delivery_number: PropTypes.string.isRequired,
  //   sale_date: PropTypes.string.isRequired,
  //   status: PropTypes.string.isRequired,
  // }).isRequired,
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
  Order: PropTypes.number.isRequired,
};
