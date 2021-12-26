import React from 'react';
import Provider from '../fireBase/auth';
import styles from "./login.module.css"

const Login = (props) => {
  

  const handleAuth = (e) => {
    e.preventDefault();
    const name = e.currentTarget.id;
    const AuthProvider = new Provider(name);
    AuthProvider.getAuth();
  }

  return <>
    <div className={styles.container}>
      <section className={styles.box}>
        <header className={styles.header}>
          <img src="../images/logo.png" alt='logo' />
          <span className={styles.headerSpan}>Business Card Maker</span>
        </header>
        <main className={styles.main}>
          <div className={styles.log}>Login</div>
          <button 
          className={styles.google}
          onClick={handleAuth}
          id="google"
          >Google</button>
          <button
           className={styles.git}
           onClick={handleAuth}
           id="github"
           >Git Hub</button>
        </main>
        <footer className={styles.footer}>
          <span>make world change</span>
        </footer>
      </section>
    </div>
  </>
}

export default Login;
