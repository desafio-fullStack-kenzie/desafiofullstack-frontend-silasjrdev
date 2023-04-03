import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ToastContainer} from "react-toastify"
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from "./contexts/AuthUserContext"
import ContactProvider from "./contexts/contactsContext";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>      
        <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <AuthProvider>
          <ContactProvider>
            <GlobalStyle/>
            <App />
          </ContactProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
