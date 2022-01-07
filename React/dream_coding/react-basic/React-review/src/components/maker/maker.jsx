import React from 'react';
import { useLocation } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from "./maker.module.css";

const Maker = (props) => {
  const location = useLocation();
  console.log(location.state)
  return (
    <section className={styles.maker}>
      <Header />
        <div className={styles.container}>
          <Editor />
          <Preview />
        </div>
      <Footer />
    </section>
  )
}

export default Maker;