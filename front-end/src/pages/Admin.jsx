import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import NavBar from '../components/Navbar';

function Admin() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRole, setUserRole] = useState('seller');
  const [registerButton, setRegisterButton] = useState('');
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

  useEffect(() => {
    const local = window.localStorage.getItem('user');
    const user = JSON.parse(local);
    const { token } = user;
    axios.defaults.headers.common.Authorization = token;
  }, []);

  // useEffect(() => {
  //   tokenAdm();
  // }, []);

  const onClickSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/admin/manage', {
        name: userName,
        email: userEmail,
        role: userRole,
        password: userPassword,
      });
      setError(false);
    } catch (err) {
      setError(true);
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
        <h1>Quadro de usuários</h1>
        {/* { userList.map((e, index) => (
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
        ))} */}
      </div>
    </div>
  );
}

export default Admin;
