import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../components/ProdContext/Context';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/Navbar';
import '../styles/Product.css';

export default function Products() { // Function that renders the products page
  const history = useHistory();
  const { cartSum, cart } = useContext(Context);
  const Checkout = () => { // Function that redirects to the checkout page
    localStorage.setItem('cart', JSON.stringify(cart)); // Saves the cart in the localStorage
    history.push('/customer/checkout');
  };
  // useEffect(() => {
  //   console.log('Por favor monta');
  // }, []);

  const EmptyCart = () => cart.every((p) => p.quantity === 0 || p.quantity === '');

  return ( // Renders the page
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
