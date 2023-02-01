import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Details({
  setOrder,
  setCheck,
  detailInfo,
  requestList,
  Order,
  produtosMock,
}) {
  console.log('DETAILS: ', detailInfo, 'REQUEST: ', requestList);
  console.log('PRODUTOS: ', produtosMock);
  const requestInfo = requestList.find((elem) => elem.id === Order);
  const detailSelect = detailInfo.filter((elem) => elem.sale_id === Order);
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
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {requestInfo.sale_date}
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
          data-testid="seller_order_details__button-preparing-check"
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
          data-testid="seller_order_details__button-dispatch-check"
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
            Pedido foi Entregue
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
        { detailSelect.map((el, index) => {
          const product = produtosMock.find((item) => item.id === el.product_id);
          return (
            <tr
              key={ el.product_id }
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
                  `seller_order_details__element-order-table-name-${el.product_id}`
                }
              >
                {product.name}
              </td>
              <td
                data-testid={
                  `eller_order_details__element-order-table-quantity-${el.product_id}`
                }
              >
                { el.quantity }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${el.product_id}`
                }
              >
                { product.price }
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${el.product_id}`
                }
              >
                { el.quantity * product.price }
              </td>
            </tr>
          );
        })}
      </table>
      <br />
      <h2
        data-testid="seller_order_details__element-order-total-price"
      >
        Total:
        { requestInfo.total_price }
      </h2>
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
