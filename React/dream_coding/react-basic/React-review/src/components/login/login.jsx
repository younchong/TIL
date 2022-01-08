import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from "./login.module.css"
import { onAuthStateChanged, signOut } from "firebase/auth";

const Login = ({authService}) => {
  let navigate = useNavigate();
  const goToMaekr = (user) => {
    navigate("/maker", {state: user})
  } 
  
  const onLogin = event => {
    event.preventDefault();
    authService
      .login(event.currentTarget.textContent)
      .then((result) => goToMaekr(result.user.uid))
      .catch((err) => console.log(err));
    
  }
  const onLogout = () => {
    authService.logout();
  }
  
  useEffect(() => {
    onAuthStateChanged(authService.firebaseAuth, (user) => {
      user && goToMaekr(user.reloadUserInfo.localId)
    }
    );
  })
  
  return (
    <section className={styles.login}>
      <Header onLogout={onLogout}/>
        <section>
          <h1>Login</h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button className={styles.button}  onClick={onLogin}>
                Google
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button}  onClick={onLogin}>
                Email
              </button>
            </li>
          </ul>
        </section>
      <Footer />
    </section>
  )
  
}

export default Login;