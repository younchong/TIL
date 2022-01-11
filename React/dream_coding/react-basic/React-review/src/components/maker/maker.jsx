import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from "./maker.module.css";
import ImageUploader from "../../service/image_uploader";

const Maker = ({authService}) => {
  const location = useLocation(); //uid알 수  있음
  const navigate = useNavigate();
  const [cards, setCard] = useState({});
  const [userId, setUserId] = useState(location.state);
  const imageUploader = new ImageUploader();

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  })
  const createOrUpdateCard = (card) => {
    setCard(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
  }
  const deleteCard = (card) => {
    setCard(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    })
  }

  function onLogout() {
    authService.logout()
    .then(() => {navigate("/")})
  }

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
        <div className={styles.container}>
          <Editor 
            cards={cards} 
            addCard={createOrUpdateCard}
            updateCard={createOrUpdateCard}
            imageUploader={imageUploader}
            deleteCard={deleteCard}
          />
          <Preview cards={cards}/>
        </div>
      <Footer />
    </section>
  )
}

export default Maker;