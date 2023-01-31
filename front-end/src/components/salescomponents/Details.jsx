import React from 'react'; // , { useState }
import PropTypes from 'prop-types';
// import { detailsMock } from '../salescomponents/Mocks';

export default function Details({ setOrder, setCheck, detailInfo }) {
  console.log('sets: ', setOrder, setCheck, ' == details: ', detailInfo);
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
