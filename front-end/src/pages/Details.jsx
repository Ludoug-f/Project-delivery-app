import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import NavBar from '../components/Navbar';
import OrderTable from '../components/OrderUtils/OrderTable';
import OrderCustomer from '../components/OrderUtils/OrderCustomer';
import OrderSeller from '../components/OrderUtils/OrderSeller';

export default function OrderDetails() {
  const [order, setOrder] = useState(undefined);
  const [path, setPath] = useState('');
  const { location: { pathname } } = useHistory();

  const { id } = useParams();

  useState(() => {
    setPath(pathname.includes('customer') ? 'customer' : 'seller');
  }, []);

  const getOrder = async () => {
    const response = (await axios.get(`http://localhost:3001/sales/details/${id}`)).data;

    if (response) setOrder(response);
  };

  useEffect(() => {
    getOrder();
  }, []);

  // Return date in format DD/MM/YYYY
  const returnDate = () => {
    if (order) {
      const months = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
      ];
      const date = new Date(order.saleDate);
      let day = date.getDate();
      const TEN = 10;
      if (day < TEN) {
        day = `0${day}`;
      }

      const month = months[date.getMonth()];
      const year = date.getFullYear();

      return `${day}/${month}/${year}`;
    }
  };

  return (
    <div>
      <NavBar />
      { order && (
        path === 'customer'
          ? (
            <OrderCustomer
              seller={ order }
              date={ returnDate() }
              updatePage={ getOrder }
            />
          ) : (
            <OrderSeller
              date={ returnDate() }
              status={ order.status }
              updatePage={ getOrder }
            />
          )
      )}
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { order && order.products.map((product, index) => (
            <OrderTable
              item={ product }
              quantity={ product.SaleProduct.quantity }
              path={ pathname }
              index={ index }
              key={ index }
            />
          ))}
        </tbody>
      </table>
      { order && (
        <h2 data-testid={ `${path}_order_details__element-order-total-price` }>
          { (+order.totalPrice).toFixed(2).replaceAll('.', ',')}
        </h2>)}
    </div>
  );
}
