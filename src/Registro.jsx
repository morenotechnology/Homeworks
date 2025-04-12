import React from "react";
import { useDispatch } from "react-redux";
import { registerAuth } from "./store/slices/registerAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css' 
const Registro = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: 'samuelMoreno@gmail.com',
    password: 'SamuTheBest'
  });

  const [loading, setLoading] = useState(false); // Estado para el cargando
  const [successMessage, setSuccessMessage] = useState(''); // Estado para mostrar mensaje de éxito

  const log = () => {
    navigate("/Login");
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Activar el cargando

    try {
      // Simulación de registro
      await dispatch(registerAuth(formState.email, formState.password));
      
      // Después de un registro exitoso, mostrar el mensaje de éxito
      setSuccessMessage('¡Registro exitoso!');
    } catch (error) {
      // En caso de error, podemos manejarlo aquí si es necesario
      console.error(error);
    } finally {
      setLoading(false); // Desactivar el cargando
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <hr />
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Mostrar mensaje de éxito */}

      <form onSubmit={(event) => onSubmit(event)}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={(event) => onInputChange(event)}
          value={formState.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={(event) => onInputChange(event)}
          value={formState.password}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Registrando..." : "Registrar"} {/* Mostrar el texto 'Registrando...' cuando está cargando */}
        </button>
      </form>
      <br />
      <button onClick={log}>Ir al Login</button>
      {successMessage && (
        <button onClick={() => navigate("/Dashboard")}>Volver al Dashboard</button>
      )}
    </div>
  );
};

export default Registro;
