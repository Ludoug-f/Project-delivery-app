import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../components/ProdContext/Context';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/Navbar';
import '../styles/Product.css';

export default function Products() {
  const history = useHistory();
  const { cartSum, cart } = useContext(Context);
  const Checkout = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    history.push('/customer/checkout');
  };
  useEffect(() => {
    console.log('Por favor monta');
  }, []);

  const EmptyCart = () => cart.every((c) => c.quantity === 0 || c.quantity === '');

  return (
    <>
      <NavBar />
      <ProductCard />

      <button
        className="checkout-bottom"
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ Checkout }
        disabled={ EmptyCart() }
      >
        <p data-testid="customer_products__checkout-bottom-value">
          {cartSum.toFixed(2).replace('.', ',')}
        </p>
      </button>

    </>
  );
}
