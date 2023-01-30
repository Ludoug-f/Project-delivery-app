import React from 'react'; // , { useState }
// import { setOrder, setCheck } from '../../pages/Seeler';

export default function Requests() {
  return (
    <div>
      Orders:
      {/* Aqui era para ter um Map */}
      <div>
        <div
          data-testid="seller_order__element-order-id-<id>"
          // tem que concerar o ID em cima
        >
          Pedido id
        </div>
        <div
          data-testid="seller_order__element-delivery-status-<id>"
        >
          StatusID
        </div>
      </div>
    </div>
  );
}
