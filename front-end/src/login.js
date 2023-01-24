import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function Login() {
  const [loginType, setLoginType] = useState('');
  const [passType, setPassType] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [erroMsg, setErroMsg] = useState(false);
  const SIX = 6;

  const validateEmail = (userEmail) => {
    const checkEmail = /\S+@\S+\.\S+/;
    return checkEmail.test(userEmail);
  };

  useEffect(() => {
    const validateRegister = () => {
      if (validateEmail(loginType) && passType.length > SIX) {
        setButtonDisabled(false);
        return;
      }
      setButtonDisabled(true);
    };
    validateRegister();
  });

  return (
    <div>
      <h1>Seja Bem vindo!</h1>

      <p>Login:</p>
      <input
        type="text"
        name="login"
        value={ loginType }
        onChange={ (elem) => setLoginType(elem.target.value) }
        data-testid="commom_login__input-email"
      />

      <p>Password:</p>
      <imput
        type="password"
        name="password"
        value={ passType }
        onChange={ (elem) => setPassType(elem.target.value) }
        data-testid="commom_login__input-password"
      />

      <button
        type="button"
        name="Entrar"
        disabled={ buttonDisabled }
        // onClick={}
        data-testid="commom_login__botton-login"
      >
        Entrar
      </button>

      <button
        type="button"
        name="Registre-se"
        data-testid="commom_login__botton-register"
        link="/register"
      >
        Registre-se
      </button>

      { erroMsg ? <p 
        data-testid="commom_login__element-invalid-email"
      >
        Email ou Senha invalidos.
      </p> : null }
    </div>
  );
};
// <link href="/register"></link>