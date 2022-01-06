import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from "./login.module.css"

const Login = ({authService}) => {
  const onLogin = event => {
    event.preventDefault();
    authService
      .login(event.currentTarget.textContent)
      .then(console.log)
      .cache(console.log)
  }
  return (
    <section>
      <Header />
        <section>
          <h1>Login</h1>
          <ul>
            <li>
              <button name="Google" onClick={onLogin}>Google</button>
            </li>
          </ul>
        </section>
      <Footer />
    </section>
  )
  
}

export default Login;