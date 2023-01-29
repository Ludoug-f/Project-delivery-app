import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user')) || {};

  const clearLocalStorage = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };
  const navName = (
    <p className="NavName" data-testid="customer_products__element-navbar-user-full-name">
      { user.name }
    </p>
  );
  const onClickLogOut = (
    <Link
      className="NavLogout"
      data-testid="customer_products__element-navbar-link-logout"
      to="/"
      onClick={ clearLocalStorage }

    >
      Logout
    </Link>
  );

  if (user.role === 'customer') {
    return (
      <div>
        <Link
          className="NavProducts"
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"

        >
          Produtos
        </Link>
        <Link
          className="NavOrders"
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
        >
          Meus Pedidos
        </Link>
        {navName}
        {onClickLogOut}
      </div>
    );
  } if (user.role === 'seller') {
    return (
      <div>
        <Link
          className="NavOrders"
          data-testid="customer_products__element-navbar-link-orders"
          to="/seller/orders"
        >
          Meus Pedidos
        </Link>
        {navName}
        {onClickLogOut}
      </div>
    );
  } if (user.role === 'administrator') {
    return (
      <div>
        <Link
          className="NavOrders"
          data-testid="customer_products__element-navbar-link-orders"
          to="/admin/manage"
        >
          Gerenciar Usuarios
        </Link>
        {navName}
        {onClickLogOut}
      </div>
    );
  }
  return null;
}
