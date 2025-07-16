// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Make sure you import your main CSS file
import { BrowserRouter } from 'react-router-dom';

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}> {/* <--- Add basename here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);