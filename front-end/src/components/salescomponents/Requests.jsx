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
      { requestList.map(() => {})}
    </div>
  );
}
