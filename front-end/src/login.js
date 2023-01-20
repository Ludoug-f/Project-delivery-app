import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function login() {
  const [loginType, setLoginType] = useState('');
  const [passType, setPassType] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
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
        // colocar data-testid
      />

      <p>Password:</p> <imput
        type="password"
        name="password"
        value={ passType }
        onChange={ (elem) => setPassType(elem.target.value) }
        // colocar data-testid
      />

      <button
        type="button"
        name="Entrar"
        disabled={ buttonDisabled }
      >
        Entrar
      </button>


      <button
        type="button"
        name="Registre-se"
      >
        Registre-se
      </button>
    </div>
  );
};
