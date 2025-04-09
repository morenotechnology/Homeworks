import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Importa el Provider de react-redux
import './index.css';
import App from './App.jsx';
import Registro from './Registro.jsx';
import { store } from './store/store';  // Asegúrate de importar el store desde la ruta correcta
import Login from './Login.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* Puedes cambiar entre App o Registro según lo que estés usando */}
      <Registro />
      <Login />
      {/* <App /> */}
    </Provider>
  </StrictMode>
);
