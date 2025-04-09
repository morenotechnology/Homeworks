import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerAuth } from './store/slices/auth/thunks';

const App = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formState;

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerAuth(email, password));
  };

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: '0 auto' }}>
      <h1>Registro</h1>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          name='email'
          type='email'
          onChange={onInputChange}
          value={email}
          placeholder="Correo electrónico"
        />
        <br />
        <input
          name='password'
          type='password'
          onChange={onInputChange}
          value={password}
          placeholder="Contraseña"
        />
        <br />
        <button type='submit'>Registrarse</button>
      </form>
    </div>
  );
};

export default App;
