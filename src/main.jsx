import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {BrowserRouter} from 'react-router-dom'; 
import { LoginProvider } from './context/LoginContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <LoginProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </LoginProvider>,
)
