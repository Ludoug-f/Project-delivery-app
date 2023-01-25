import React, { useState, useEffect } from 'react';

const SIX = 6;
const TWELVE = 12;

export default function Register() {
  const [nameType, setNameType] = useState('');
  const [emailTypeR, setEmailTypeR] = useState('');
  const [passRegister, setPassRegister] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  // const [erroMsg, setErroMsg] = useState(false);

  const validateEmail = (userEmail) => {
    const checkEmail = /\S+@\S+\.\S+/;
    return checkEmail.test(userEmail);
  };

  useEffect(() => {
    const validateLogin = () => {
      if (validateEmail(emailTypeR)
      && passRegister.length > SIX
      && nameType.length > TWELVE) {
        setButtonDisabled(false);
        return;
      }
      setButtonDisabled(true);
    };
    validateLogin();
  });

  return (
    <div>
      <form className="Form">
        <p>Nome</p>
        <label htmlFor="Nome">
          <input
            type="text"
            id="Nome"
            placeholder="Seu nome"
            value={ nameType }
            data-testid="commom_register__input-name"
            onChange={ (elem) => setNameType(elem.target.value) }
          />
        </label>

        <p>Email</p>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            placeholder="seu-email@site.com.br"
            value={ emailTypeR }
            data-testid="commom_register__input-email"
            onChange={ (elem) => setEmailTypeR(elem.target.value) }
          />
        </label>

        <p>Senha</p>
        <label htmlFor="password">
          <input
            type="password"
            id="password"
            placeholder="**********"
            value={ passRegister }
            data-testid="commom_register__input-password"
            onChange={ (elem) => setPassRegister(elem.target.value) }
          />
        </label>

        <button
          type="submit"
          name="Cadastrar"
          disabled={ buttonDisabled }
          // onClick={}
          data-testid="commom_register__botton-register"
        >
          Cadastrar
        </button>
        <p
          hidden="true"
          data-testid="commom_register__element-invalid-register"
        >
          Email ou Senha invalidos.
        </p>
      </form>
    </div>
  );
}
