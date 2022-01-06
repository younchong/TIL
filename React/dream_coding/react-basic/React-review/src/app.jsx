import styles from './app.module.css';
import React from 'react';
import Login from './components/login/login';

function App({authService}) {
  return  <Login authService={authService}/>
}

export default App;
