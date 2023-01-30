import React, { useState } from 'react'; // , { useContext }
import NavBar from '../components/Navbar';
// import '../styles/Seeler.css';

export default function Seller() {
  const [Order, setOrder] = useState('');
  const [Check, setCheck] = useState(false);

  return (
    <>
      <NavBar />
      {/* { Check ? <Request
        props={ setOrder, setCheck }
      /> : <Details
        props={ setOrder, setCheck }
      /> } */}
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
