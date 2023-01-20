import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function login() {
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
    const validateLogin = () => {
      if (validateEmail(loginType) && passType.length > SIX) {
        setDisabledButton(false);
        return;
      }
      setDisabledButton(true);
    };
    validateLogin();
  });

  return (
    <div
      // display="flex"
    >
      <h1>Seja Bem vindo!</h1>
      
      <p>Login:</p> <input
        type="text"
        name="login"
        value={ loginType }
        onChange={ (elem) => setLoginType(elem.target.value) }
        data-testid="commom_login__input-email"
      />

      <p>Password:</p> <imput
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


      <link href="/register"><button
        type="button"
        name="Registre-se"
        data-testid="commom_login__botton-register"
      >
        Registre-se
      </button></link>

      { erroMsg ? <p 
          data-testid="commom_login__element-invalid-email"
        >
          Email ou Senha invalidos.
        </p> : null }
    </div>
  );
};
