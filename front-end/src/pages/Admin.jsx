import React, { useState, useEffect } from 'react';

function Admin() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('vendedor');
  const [registerButton, setRegisterButton] = useState(true);
  const [userList, setUSerList] = useState([]);

  // const validateButton = () => {
  //   const condName = false;
  //   const condEmail = false;
  //   const condPassword = false;
  //   const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  //   if (userName.length >= TWELVE && userPassword.length >= SIX) {
  //     condName = true;
  //     condPassword = true;
  //   }
  //   if (reg.test(userEmail)) {
  //     condEmail = true;
  //   }
  //   if (condName && condEmail && condPassword) {
  //     return setRegisterButton(false);
  //   }
  // };

  useEffect(() => {
    const SIX = 6;
    const TWELVE = 12;
    const valid = /\S+@\S+\.\S+/;
    if (
      valid.test(userEmail)
      && userPassword.length >= SIX && userName.length >= TWELVE) {
      setRegisterButton(false);
    } if (
      !valid.test(userEmail) || userPassword.length < SIX || userName.length < TWELVE) {
      setRegisterButton(true);
    }
  }, [userEmail, userPassword, userName]);

  const registerUserButtonClick = (e) => {
    e.preventDefault();
    const newUser = {
      userName,
      userEmail,
      userPassword,
      userRole,
    };
    setUSerList([...userList, newUser]);
    setUserName('');
    setUserEmail('');
    setUserPassword('');
    setUserRole('vendedor');
    setRegisterButton(false);
  };

  return (
    <div>
      <header>
        <title
          data-testid="customer_products__element-navbar-link-orders"
        >
          Gerenciar Usuários
        </title>
        <h1
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Tryber Admin
        </h1>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </header>
      <div>
        <div>
          Quadro de cadastro
          <h2>Cadastrar novos usuários</h2>
          <input
            onChange={ ({ target }) => { setUserName(target.value); } }
            placeholder="Nome e sobrenome"
            type="text"
            id="name"
            data-testid="admin_manage__input-name"
          />
          <input
            onChange={ ({ target }) => { setUserEmail(target.value); } }
            id="email"
            placeholder="seu-email@site.com.br"
            type="email"
            data-testid="admin_manage__input-email"
          />
          <input
            onChange={ ({ target }) => { setUserPassword(target.value); } }
            placeholder="************"
            type="password"
            data-testid="admin_manage__input-password"
          />
          <select
            onChange={ ({ target }) => { setUserRole(target.value); } }
            value={ userRole }
            data-testid="admin_manage__select-role"
          >
            <option
              value="vendedor"
            >
              vendedor
            </option>
            <option
              value="usuário"
            >
              usuário
            </option>
          </select>
          <button
            type="submit"
            disabled={ registerButton }
            onClick={ registerUserButtonClick }
            data-testid="admin_manage__button-register"
          >
            Cadastrar
          </button>
        </div>
      </div>
      <div>
        Quadro de lista de usuários
        <h1>Quadro de usuários</h1>
        { userList.map((e, index) => (
          <div key={ index }>
            <p
              data-testid={ `admin_manage__element-user-table-item-number-${index}` }
            >
              {index}
            </p>
            <p
              data-testid={ `admin_manage__element-user-table-item-name-${index}` }
            >
              {e.name}
            </p>
            <p
              data-testid={ `admin_manage__element-user-table-email-${index}` }
            >
              {e.email}
            </p>
            <p
              data-testid={ `admin_manage__element-user-table-role-${index}` }
            >
              {e.tipo}
            </p>
            <button
              type="button"
              data-testid={ `admin_manage__element-user-table-remove-${index}` }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
