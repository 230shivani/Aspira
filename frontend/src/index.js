import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

<<<<<<< HEAD
import { AuthProvider } from './context/AuthContext';

=======
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <AuthProvider>
        <App />
      </AuthProvider>
=======
      <App />
>>>>>>> 818a2ce4ef2a1b8b7b5de858aed75ad4f0674d4c
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
