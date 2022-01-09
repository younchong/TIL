import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from "./maker.module.css";

const Maker = ({authService}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cards, setCard] = useState([
    {
      id: "1",
      name: "Elon",
      company: "Tesla",
      theme: "Light",
      title: "CEO",
      email: "Tesla@gmail.com",
      message: "Go to Mars",
      fileName: "Elon",
      fileURL: "Elon.png"
    },
    {
      id: "2",
      name: "Steve",
      company: "Apple",
      theme: "Dark",
      title: "CEO",
      email: "Apple@gmail.com",
      message: "Stay Hungry",
      fileName: "Jobs",
      fileURL: "Jobs.png"
    },
    {
      id: "3",
      name: "Elon",
      company: "Tesla",
      theme: "Light",
      title: "CEO",
      email: "Tesla@gmail.com",
      message: "Go to Mars",
      fileName: "Elon",
      fileURL: "Elon.png"
    }
  ])
  
  function onLogout() {
    authService.logout()
    .then(() => {navigate("/")})
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
        <div className={styles.container}>
          <Editor cards={cards}/>
          <Preview cards={cards}/>
        </div>
      <Footer />
    </section>
  )
}

export default Maker;