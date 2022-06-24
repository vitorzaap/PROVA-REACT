import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routers from "../src/Routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <Routers />
  </React.StrictMode>
);
