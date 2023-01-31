import React from 'react'; // , { useState }
// import { detailsMock } from '../salescomponents/Mocks';

export default function Details({ setOrder, setCheck, detailInfo }) {
  return (
    <div>
      Detalhes do Produto:
      <div>
        <div
          // Header Lista
          className="HeaderRequestList"
        >
          <div>
            Pedido
          </div>
          <div>
            Data
          </div>
          <div>
            Status
          </div>
          <div>
            Mudar Info
          </div>
        </div>
        <div
          // Lista completa
          className="RequestList"
        >
          Lista
        </div>
      </div>
    </div>
  );
}
