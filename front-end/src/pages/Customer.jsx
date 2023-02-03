import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';
import CardOrder from '../components/CardOrder';

function CustomerPage() {
  const [sales, setSales] = useState([]);

  const fetchSales = async () => {
    const { email } = JSON.parse(localStorage.getItem('user'));
    const response = await axios.get(`http://localhost:3001/sales/user/${email}`);
    setSales(response.data);
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <div>
      <NavBar />
      {
        sales ? sales.map((sale) => (<CardOrder sale={ sale } key={ sale.id } />))
          : <div>Carregando...</div>
      }

    </div>
  );
}

export default CustomerPage;
