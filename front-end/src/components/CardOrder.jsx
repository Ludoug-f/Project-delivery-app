import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function OrderCard({ sale }) {
  const { id,
    status,
    deliveryAddress,
    deliveryNumber,
    totalPrice } = sale;
  const [currentPath, setCurrentPath] = useState('');
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname.includes('seller')) return setCurrentPath('seller');
    setCurrentPath('customer');
  }, []);

  // Return date in format DD/MM/YYYY
  const returnDate = () => {
    if (sale) {
      const months = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
      ];
      const date = new Date(sale.saleDate);
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
    <div className="orderCard-Container">
      <button
        className="orderCard"
        onClick={ () => (currentPath === 'seller' ? history.push(`/seller/orders/${id}`)
          : history.push(`/customer/orders/${id}`)) }
        type="button"
      >
        <p
          data-testid={ `${currentPath}_orders__element-order-id-${id}` }
        >
          {id}
        </p>
        <p data-testid={ `${currentPath}_orders__element-delivery-status-${id}` }>
          {status}
        </p>
        {currentPath === 'seller'
          ? (
            <p data-testid={ `$seller_orders__element-card-address-${id}` }>
              {`${deliveryAddress}, ${deliveryNumber}`}
            </p>)
          : null }
        <p data-testid={ `${currentPath}_orders__element-order-date-${id}` }>
          {returnDate()}
        </p>
        <p data-testid={ `${currentPath}_orders__element-card-price-${id}` }>
          {totalPrice.replace('.', ',')}
        </p>
      </button>
    </div>
  );
}

OrderCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    sellerId: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
