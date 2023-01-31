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
      {/* Aqui era para ter um Map */}
      { requestList.map((elem) => { return (
          <div
            key={elem.id}
          >

          </div>
        )
}

      )}

      <div>
        <div
          // data-testid={ `seller_order__element-order-id-${id}` }
          // tem que concertar o ID em cima
        >
          Pedido
        </div>
        <div
          data-testid="seller_order__element-delivery-status-<id>"
        >
          Status 
        </div>
        <div>
          <div
            data-testid="seller_orders__element-order-date-<id></id>"
          >
            Data
          </div>
          <div
            data-testid="seller_orders__element-card-price-<id>"
          >
            Preço
          </div>
        </div>
        <div
          data-testid="seller_orders__element-card-address-<id></id>"
        >
          Endereço
        </div>
      </div>
    </div>
  );
}
