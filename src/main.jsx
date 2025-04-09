import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import './index.css';
import'./App.css' // Tu archivo de estilos
import App from './App'; // Tu componente principal
import { Provider } from 'react-redux';
import store from './store'; // Importa tu store de Redux

// Crear el root para la aplicación en React 18
const root = ReactDOM.createRoot(document.getElementById('root')); // Crear el root

// Renderizar la aplicación dentro del root
root.render(
  <Provider store={store}> {/* Asegúrate de envolver toda la app */}
    <App />
  </Provider>
);
