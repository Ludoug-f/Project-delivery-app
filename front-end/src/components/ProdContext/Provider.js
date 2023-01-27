import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from './Context';
import API from '../../utils/API';

// State management for products and cart
function ProdProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartSum, setcartSum] = useState(0);
  const history = useHistory();

  // Create cart with products and quantity 0
  const createCart = (data) => {
    const emptyCart = data.map(({ id, name, price }) => ({
      id,
      name,
      quantity: 0,
      price: Number(price),
    }));
    setCart(emptyCart);
  };

  // Get all products from API
  const getProducts = async () => {
    const data = await API.GetProducts();
    createCart(data);
    setProducts(data);
  };

  // Validate token
  const tokenValidation = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    try {
      await axios.post('http://localhost:3001/login/token', { // Middleware for token validation
        token,
      });
    } catch (_err) {
      history.push('/login'); // Redirect to login page if token is invalid
    }
  };

  // Validate token on page load and get products
  useEffect(() => {
    tokenValidation();
    getProducts();
  }, []);

  // Sum of products in cart
  const sumCart = () => {
    const Sum = cart.reduce((crt, p) => crt + (p.quantity * p.price), 0);
    setcartSum(Sum);
  };

  // Add product to cart
  const cardAdd = (id) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        product.quantity = product.quantity === '' ? product.quantity = 1
          : product.quantity += 1;
      }
      return product;
    });
    setCart(newCart);
    sumCart();
  };

  // Remove product from cart
  const cardRm = (id) => {
    const newCart = cart.map((product) => {
      if (product.id === id && product.quantity > 0) {
        product.quantity -= 1;
      }
      return product;
    });
    setCart(newCart);
    sumCart();
  };

  // Change quantity of product in cart
  const cardQuantity = (id, value) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        product.quantity = value === '' ? value : Number(value);
      }
      return product;
    });
    setCart(newCart);
    sumCart();
  };

  // Context to be used in children components
  const newContext = useMemo(() => ({
    products,
    cart,
    cartSum,
    cardAdd,
    cardRm,
    cardQuantity,
  }), [products, cart]);
  return (
    <Context.Provider value={ newContext }>
      {children}
    </Context.Provider>
  );
}

ProdProvider.propTypes = {}.isRequired;

export default ProdProvider;
