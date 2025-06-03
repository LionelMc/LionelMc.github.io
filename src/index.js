import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/style.css'; // Cambia la ruta al CSS dentro de src

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);