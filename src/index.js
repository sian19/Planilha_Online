import React from 'react';
import ReactDOM from 'react-dom/client';
import Planilha from './Planilha';

import { AuthProvider } from './context/AuthProvider';

import './style/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <AuthProvider>
      <Planilha />
    </AuthProvider>
 
);


