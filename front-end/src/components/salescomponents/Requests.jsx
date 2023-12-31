import React from 'react';
import PropTypes from 'prop-types';

export default function Requests({ setOrder, setCheck, requestList }) {
  const clickHere = (el) => {
    setCheck(true);
    setOrder(el);
  };
  return (
    <div>
      Orders:
      <br />
      <br />
      <br />
      <br />
      { requestList.map((elem) => (
        <button
          type="button"
          key={ elem.id }
          onClick={ () => clickHere(elem.id) }
        >
          <div>
            Pedido
            <p
              data-testid={ `seller_order__element-order-id-${elem.id}` }
            >
              { elem.id }
            </p>
          </div>
          <div
            data-testid={ `seller_order__element-delivery-status-${elem.id}` }
          >
            { elem.status }
          </div>

          <div>
            <div
              data-testid={ `seller_orders__element-order-date-${elem.id}` }
            >
              { elem.sale_date }
            </div>
            <div
              data-testid={ `seller_orders__element-card-price-${elem.id}` }
            >
              { elem.total_price }
            </div>
          </div>

          <div
            data-testid={ `seller_orders__element-card-address-${elem.id}` }
          >
            { elem.delivery_adress }
          </div>
          <br />

        </button>
      )) }
    </div>
  );
}

Requests.propTypes = {
  setOrder: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
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
};
