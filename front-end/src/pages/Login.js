import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import APIs from '../ultils/APIs';

export default function Login() {
  const history = useHistory();
  const [loginType, setLoginType] = useState('');
  const [passType, setPassType] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [erroMsg, setErroMsg] = useState(false);
  const SIX = 6;

  function redirectRegister() {
    history.push('/register');
  }

  const validateEmail = (userEmail) => {
    const checkEmail = /\S+@\S+\.\S+/;
    return checkEmail.test(userEmail);
  };

  useEffect(() => {
    const validateLogin = () => {
      if (validateEmail(loginType) && passType.length > SIX) {
        setButtonDisabled(false);
        return;
      }
      setButtonDisabled(true);
    };
    validateLogin();
  });

  const loginClick = async (data) => {
    const result = await APIs.LoginAPI('/login', 'POST', data);
    const { role } = result;
    if (role === 'costume') return history.push('/costmer/products');
    if (role === 'seller') return history.push('/seller/orders');
    if (role === 'admin') return history.push('/admin/manage');
    if (response.message === 'Not found') setErroMsg(true);
    return null;
  };

  return (
    <div>
      <form className="Form">
        <img
          src="https://i.imgur.com/io3eip2.png"
          alt="logomarca da Drinks Delivery"
        />
        Login:
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="Insira seu email"
            value={ loginType }
            data-testid="common_login__input-email"
            onChange={ (elem) => setLoginType(elem.target.value) }
          />
        </label>
        Senha:
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="Insira sua senha"
            value={ passType }
            data-testid="common_login__input-password"
            onChange={ (elem) => setPassType(elem.target.value) }
          />
        </label>
        <button
          type="submit"
          disabled={ buttonDisabled }
          data-testid="common_login__button-login"
          onClick={ loginClick() }
        >
          LOGIN
        </button>
        <button
          type="submit"
          data-testid="common_login__button-register"
          onClick={ redirectRegister }
        >
          Ainda não tenho conta
        </button>
        { erroMsg
          ? (
            <div data-testid="common_login__element-invalid-email">
              Email ou Senha invalidos.
            </div>
          )
          : '' }
      </form>
      { erroMsg
        ? (
          <div data-testid="common_login__element-invalid-email">
            Email ou Senha invalidos.
          </div>
        )
        : '' }
    </div>
  );
}
