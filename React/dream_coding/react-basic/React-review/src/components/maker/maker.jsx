import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from "./maker.module.css";

const Maker = ({authService}) => {
  const location = useLocation();
  let navigate = useNavigate();
  
  function onLogout() {
    authService.logout()
    .then(() => {navigate("/")})
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
        <div className={styles.container}>
          <Editor />
          <Preview />
        </div>
      <Footer />
    </section>
  )
}

export default Maker;