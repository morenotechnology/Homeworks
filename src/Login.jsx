import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithEmailPassword, registerWithGoogle, startLogout } from './store/slices/auth/thunks';
import './Auth.css';

const Login = () => {
  const dispatch = useDispatch();
  const { user, errorMessage } = useSelector((state) => state.auth);

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const { email, password } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    dispatch(loginWithEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(registerWithGoogle());
  };

  const handleLogout = () => {
    dispatch(startLogout());
    setSuccessMessage('');
  };

  // Mostrar mensaje de éxito cuando se loguea
  useEffect(() => {
    if (user) {
      setSuccessMessage("Inicio de sesión exitoso.");
    }
  }, [user]);

  return (
    <div className="auth-container">
      <h2>Iniciar Sesión</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
        />

        <button type="submit">Ingresar</button>
      </form>

      <button className="google-btn" onClick={handleGoogleLogin}>
        Iniciar sesión con Google
      </button>

      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}

      {user && (
        <>
          <p className="success">Bienvenido, {user.displayName || user.email}</p>
          <button className="google-btn" onClick={handleLogout}>Cerrar sesión</button>
        </>
      )}
    </div>
  );
};

export default Login;
