import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// lançar mensagens de aviso ao user
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={3000} />
  </React.StrictMode>
);


