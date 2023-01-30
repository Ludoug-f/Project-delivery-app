import React, { useContext } from 'react';
import NavBar from '../components/Navbar';
// import '../styles/Seeler.css';

export default function Seller() {
  const [Order, setOrder] = useContext('');
  const [Check, setCheck] = useContext(false);

  return (
    <>
      <NavBar />
      <p>Começando</p>
      <p>Ah</p>
      { Check ? <Request
        props={ setOrder, setCheck }
      /> : <Details
        props={ setOrder, setCheck }
      /> }
    </>
  );
}
