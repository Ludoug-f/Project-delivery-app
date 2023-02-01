import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Details({ setOrder, setCheck, detailInfo, requestInfo }) {
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
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        { detailInfo.map((elem) => (
          <tr
            key={ elem.product_id }
          >
            <td
              data-testid={
                `seller_order_details__element-order-table-item-number-${elem.product_id}`
              }
            >
              { elem.product_id }
            </td>
            <td
              data-testid={
                `seller_order_details__element-order-table-name-${elem.product_id}`
              }
            >
              nome do produto
            </td>
            <td>
              Quantidade
            </td>
            <td>
              Preço
            </td>
            <td>
              SubTotal
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
  requestInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
    seller_id: PropTypes.number.isRequired,
    total_price: PropTypes.number.isRequired,
    delivery_adress: PropTypes.string.isRequired,
    delivery_number: PropTypes.string.isRequired,
    sale_date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
