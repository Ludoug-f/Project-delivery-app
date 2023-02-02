import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Requests from '../components/salescomponents/Requests';
import Details from '../components/salescomponents/Details';
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
        /> : <Details
          setOrder={ setOrder }
          setCheck={ setCheck }
          detailInfo={ detailsMock }
          requestList={ pedidosMock }
          produtosMock={ produtosMock }
          Order={ Order }
          oc="client"
        /> }
      </div>
    </>
  );
}
