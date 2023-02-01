import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Requests from '../components/salescomponents/Requests';
import DetailsGPT from '../components/salescomponents/DetailsGPT';
import {
  pedidosMock,
  detailsMock,
  produtosMock,
} from '../components/salescomponents/Mocks';

export default function Seller() {
  const [Order, setOrder] = useState('');
  const [Check, setCheck] = useState(false);

  return (
    <>
      <NavBar />
      <br />
      <div>
        { !Check ? <Requests
          setOrder={ setOrder }
          setCheck={ setCheck }
          requestList={ pedidosMock }
        /> : <DetailsGPT
          setOrder={ setOrder }
          setCheck={ setCheck }
          detailInfo={ detailsMock }
          requestList={ pedidosMock }
          produtosMock={ produtosMock }
          Order={ Order }
          // requestInfo={ pedidosMock[Order] }
        /> }
        { Check ? <p>OK</p> : <p>Not</p> }
      </div>
    </>
  );
}
