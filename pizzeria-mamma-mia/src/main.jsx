import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { PizzaProvider } from './context/PizzaContext.jsx';
import { UserProvider } from './context/UserContext.jsx'; 

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider> {/* ✅ ENVUELVE TU APP CON ESTO */}
        <CartProvider>
          <PizzaProvider>
            <App />
          </PizzaProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
