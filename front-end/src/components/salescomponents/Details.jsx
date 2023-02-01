/* eslint-disable react/prop-types */
import React from 'react'; // , { useState }
import PropTypes from 'prop-types';
// import { detailsMock } from '../salescomponents/Mocks';

// eslint-disable-next-line react/prop-types
export default function Details({ setOrder, setCheck, detailInfo, requestInfo }) {
  console.log('sets: ', setOrder, setCheck, ' == details: ', detailInfo, requestInfo);
  return (
    <div>
      Detalhes do Produto:
      { detailInfo.map((elem) => (
        <div
          key={ elem.product_id }
        >
          { elem.product_id }
        </div>
      ))}
    </div>
  );
}

Details.propTypes = {
  // children: PropTypes.shape({
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
  // }).isRequired,
};
