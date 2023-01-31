import React from 'react'; // , { useState }
import PropTypes from 'prop-types';
// import { setOrder, setCheck } from '../../pages/Seeler';
// import { pedidosMock } from '../salescomponents/Mocks';

export default function Requests({ setOrder, setCheck, requestList }) {
  // const { setOrder, setCheck, requestList } = PropTypes;
  console.log(setOrder, setCheck, requestList);
  return (
    <div>
      Orders:
      { requestList.map((elem) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          key={ elem.id }
          // eslint-disable-next-line no-unused-expressions, no-sequences
          onClick={ () => { setCheck(true) setOrder(elem.id); } }
        >
          <div
            data-testid={ `seller_order__element-order-id-${id}` }
          >
            Pedido
            { elem.id }
          </div>
          <div
            data-testid={ `seller_order__element-delivery-status-${id}` }
          >
            { elem.status }
          </div>

          <div>
            <div
              data-testid={ `seller_orders__element-order-date-${id}` }
            >
              { elem.sale_date }
            </div>
            <div
              data-testid={ `seller_orders__element-card-price-${id}` }
            >
              { elem.total_price }
            </div>
          </div>

          <div
            data-testid={ `seller_orders__element-card-address-${id}` }
          >
            { elem.delivery_adress }
          </div>

        </div>
      )) }
    </div>
  );
}

Request.propTypes = {
  setOrder: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  requestList: PropTypes.array.isRequired,
};
