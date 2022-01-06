import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import { authFirebase } from './service/firebase';
const authService = new AuthService(authFirebase);
console.log(process.env.REACT_APP_FIREBASE_API_KEY)
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);
