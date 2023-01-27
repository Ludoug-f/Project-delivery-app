import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import API from '../utils/API';

export default function Register() {
  const history = useHistory();
  const [error, setError] = useState(false);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Button, setButton] = useState('');

  useEffect(() => {
    const SIX = 6;
    const TWELVE = 12;
    const valid = /\S+@\S+\.\S+/;
    if (valid.test(Email) && Password.length >= SIX && Name.length >= TWELVE) {
      setButton(false);
    } if (!valid.test(Email) || Password.length < SIX || Name.length < TWELVE) {
      setButton(true);
    }
  }, [Email, Password, Name]);

  const { register, handleSubmit } = useForm();
  const onClickSubmit = async (data) => {
    const response = await API
      .fetchBody('/register', 'POST', { ...data, role: 'costumer' });

    if (response.message === 'Email already exists') {
      setError(true);
    }
    if (response.message === 'Name already exists') {
      setError(true);
    } else {
      const login = await API.fetchBody('/login', 'POST', data);
      localStorage.setItem('user', JSON.stringify(login));
      if (response.role === 'customer') return history.push('/customer/products');
      if (response.role === 'seller') return history.push('/seller/orders');
      history.push('/admin/manage');
    }
  };

  return (
    <div className="container-login">
      {error
      && <p data-testid="common_register__element-invalid_register">Erro no registro</p>}
      <form className="register" onSubmit={ handleSubmit(onClickSubmit) }>

        <input
          data-testid="common_register__input-name"
          type="text"
          placeholder="Seu Nome"
          id="name"
          { ...register('name', { min: 12 }) }
          onChange={ ({ target }) => {
            setName(target.value);
          } }
        />

        <input
          data-testid="common_register__input-email"
          type="email"
          placeholder="seu-email@site.com.br"
          id="email"
          { ...register('email') }
          onChange={ ({ target }) => {
            setEmail(target.value);
          } }
        />

        <input
          data-testid="common_register__input-password"
          type="password"
          placeholder="************"
          id="password"
          { ...register('password', { min: 6 }) }
          onChange={ ({ target }) => {
            setPassword(target.value);
          } }
        />

        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ Button }
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
