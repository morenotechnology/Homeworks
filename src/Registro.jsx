import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerAuth, registerWithGoogle } from './store/slices/auth/thunks';
import { signOut } from 'firebase/auth';
import { auth } from './firebase/config';
import './Auth.css';

const Registro = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

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
    setErrorMessage("");
    setSuccessMessage("");

    dispatch(registerAuth(email, password))
      .then(() => {
        setSuccessMessage("Usuario registrado correctamente.");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGoogleLogin = () => {
    dispatch(registerWithGoogle())
      .then(() => {
        setSuccessMessage("Usuario registrado correctamente con Google.");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setSuccessMessage("");
      })
      .catch((error) => {
        console.error('Error cerrando sesión:', error.message);
      });
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>

      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={onInputChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={onInputChange}
        />

        <button type="submit">Registrarse</button>
      </form>

      <button className="google-btn" onClick={handleGoogleLogin}>
        Registrarse con Google
      </button>

      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      {user && (
        <>
          <p className="success">Bienvenido, {user.displayName || user.email}!</p>
          <button className="google-btn" onClick={handleLogout}>Cerrar sesión</button>
        </>
      )}
    </div>
  );
};

export default Registro;
