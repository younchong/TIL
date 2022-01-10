import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import { authFirebase } from './service/firebase';
import ImageFileInput from './components/image_file_input/image_file_input';
import ImageUploader from './service/image_uploader';
const authService = new AuthService(authFirebase);
const imageUploader = new ImageUploader();


ReactDOM.render(
  <React.StrictMode>
    <App 
    authService={authService}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
