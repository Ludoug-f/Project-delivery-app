import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import NavBar from '../components/Navbar';
import API from '../utils/API';

function Admin() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('vendedor');
  const [registerButton, setRegisterButton] = useState('');
  const [userList, setUserList] = useState([]);
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
    console.log(data);
    const registerVerify = await API
      .fetchBody('/register', 'POST', { ...data });
    if (registerVerify.message === 'Data already exists') {
      setError(true);
    } else {
      const createUser = await API.fetchBody('/admin/manage', 'POST', data);
      localStorage.setItem('user', JSON.stringify(createUser));
      setUserList(createUser);
    }
  };

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        {error
        && <p data-testid="admin_manage__element-invalid-register">Erro no registro</p>}
        <h2>Cadastrar novos usuários</h2>
        <form className="register" onSubmit={ handleSubmit(onClickSubmit) }>
          <input
            data-testid="admin_manage__input-name"
            type="text"
            placeholder="Nome e sobrenome"
            id="name"
            { ...register('name', { min: 12 }) }
            onChange={ ({ target }) => {
              setUserName(target.value);
            } }
          />

          <input
            data-testid="admin_manage__input-email"
            type="email"
            placeholder="seu-email@site.com.br"
            id="email"
            { ...register('email') }
            onChange={ ({ target }) => {
              setUserEmail(target.value);
            } }
          />

          <input
            data-testid="admin_manage__input-password"
            type="password"
            placeholder="************"
            id="password"
            { ...register('password', { min: 6 }) }
            onChange={ ({ target }) => {
              setUserPassword(target.value);
            } }
          />

          <select
            { ...register('role') }
            onChange={ ({ target }) => {
              setUserRole(target.value);
            } }
            data-testid="admin_manage__select-role"
          >
            <option
              value="seeler"
            >
              Vendedor
            </option>
            <option
              value="customer"
            >
              Usuário
            </option>
          </select>
          <button
            data-testid="admin_manage__button-register"
            type="submit"
            disabled={ registerButton }
          >
            CADASTRAR
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
