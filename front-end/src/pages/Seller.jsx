import React, { useState } from 'react'; // , { useContext }
import NavBar from '../components/Navbar';
import Requests from '../components/salescomponents/Requests';
import Details from '../components/salescomponents/Details';
// import '../styles/Seeler.css';
import { pedidosMock, detailsMock } from '../components/salescomponents/Mocks';

export default function Seller() {
  const [Order, setOrder] = useState('');
  const [Check, setCheck] = useState(false);

  return (
    <>
      <NavBar />
      { Check ? <Requests
        // props={ [setOrder, setCheck, pedidosMock] }
        setOrder={ setOrder }
        setCheck={ setCheck }
        pedidosMock={ pedidosMock }
      /> : <Details
        // props={ [setOrder, setCheck, detailsMock] }
        setOrder={ setOrder }
        setCheck={ setCheck }
        detailsMock={ detailsMock }
      /> }
      { Check ? <p>OK</p> : <p>Not</p> }
      <button
        type="button"
        onClick={ () => setCheck(true) }
      >
        Mudar o Check
      </button>
      { Order }
      <input
        value={ Order }
        onChange={ () => setOrder(target.value) }
      />
    </>
  );
}
