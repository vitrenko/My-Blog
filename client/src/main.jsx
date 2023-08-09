import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import "./assets/styles/index.css";

import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CssBaseline />
        <App />
        <ToastContainer />
    </React.StrictMode>,
);
