import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

function Admin() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('vendedor');
  const [registerButton, setRegisterButton] = useState('');
  const [userList, setUSerList] = useState([]);
  const [error, setError] = useState(false);

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

  const { register, handleSubmit } = useForm();

  const onClickSubmit = async (data) => {
    // const registerVerify = await API
    //   .fetchBody('/register', 'POST', { ...data });
    // if (registerVerify.message === 'Data already exists') {
    //   setError(true);
    // } else {
    setUSerList([...userList, data]);
    localStorage.setItem('user', JSON.stringify(data));
    // const login = await API.fetchBody('/login', 'POST', data);
    // if (login.role === 'customer') history.push('/customer/products');
    // }
  };

  const removeUsers = (index) => {
    const updatedUsers = userList.filter((e, i) => i !== index);
    setUSerList([...updatedUsers]);
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
        {error
        && <p data-testid="admin_manage__element-invalid-register">Erro no registro</p>}
        <h2>Cadastrar novos usuários</h2>
        <form onSubmit={ handleSubmit(onClickSubmit) }>
          <input
            onChange={ ({ target }) => { setUserName(target.value); } }
            placeholder="Nome e sobrenome"
            type="text"
            id="name"
            { ...register('name', { min: 12 }) }
            data-testid="admin_manage__input-name"
          />
          <input
            onChange={ ({ target }) => { setUserEmail(target.value); } }
            id="email"
            placeholder="seu-email@site.com.br"
            type="email"
            { ...register('email') }
            data-testid="admin_manage__input-email"
          />
          <input
            onChange={ ({ target }) => { setUserPassword(target.value); } }
            placeholder="************"
            { ...register('password', { min: 6 }) }
            type="password"
            data-testid="admin_manage__input-password"
          />
          <select
            onChange={ ({ target }) => { setUserRole(target.value); } }
            // value={ userRole }
            { ...register('role') }
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
            disabled={ false }
            data-testid="admin_manage__button-register"
          >
            Cadastrar
          </button>
        </form>
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
              data-testid={ `admin_manage__element-user-table-name-${index}` }
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
              onClick={ () => removeUsers(index) }
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
