import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import API from '../utils/API';
import '../styles/Login.css';

export default function Login() {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Button, setButton] = useState('');

  useEffect(() => {
    if (history.location.pathname === '/') history.push('/login'); // Verify if the user is logged in
  }, []);

  useEffect(() => { // Verify if the button should be disabled or not
    const number = 6;
    const valid = /\S+@\S+\.\S+/;
    if (valid.test(Email) && Password.length >= number) {
      setButton(false);
    } if (!valid.test(Email) || Password.length < number) {
      setButton(true);
    }
  }, [Email, Password]);

  const { register, handleSubmit } = useForm();
  const onClickSubmit = async (data) => { // Send the data to the API and redirect to the correct page
    const response = await API.fetchBody('/login', 'POST', data);

    // Verify if the user exists
    if (response.message === 'Not found') {
      setError(true);
    } else {
      localStorage.setItem('user', JSON.stringify(response)); // Redirect to the correct page
      if (response.role === 'customer') return history.push('/customer/products'); // Redirect to the correct page if user is a customer
      if (response.role === 'seller') return history.push('/seller/orders'); // Redirect to the correct page if user is a seller
      history.push('/admin/manage'); // Redirect to the correct page if user is an admin
    }
  };

  // Render the login page
  return (
    <div
      className="Login-Container"
    >
      {error
      && <p data-testid="common_login__element-invalid-email">Email ou Senha Inválido</p>}

      <form className="login" onSubmit={ handleSubmit(onClickSubmit) }>
        <input
          className="email"
          data-testid="common_login__input-email"
          type="email"
          placeholder="email"
          id="email"
          { ...register('email') }
          onChange={ ({ target }) => {
            setEmail(target.value);
          } }
        />

        <input
          className="password"
          data-testid="common_login__input-password"
          type="password"
          placeholder="password"
          id="password"
          { ...register('password', { min: 6 }) }
          onChange={ ({ target }) => {
            setPassword(target.value);
          } }
        />
        <button
          className="button"
          data-testid="common_login__button-login"
          type="submit"
          disabled={ Button }
        >
          Login
        </button>
        <Link
          to="/register"
        >
          <button
            className="button"
            data-testid="common_login__button-register"
            type="button"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </form>
    </div>
  );
}
