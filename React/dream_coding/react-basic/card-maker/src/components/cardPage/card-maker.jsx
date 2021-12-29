import styles from "./card-maker.module.css";
import React, { useState } from 'react';
import CardTable from "./card-table";
import CompleteCard from "./complete-card";

const CardMaker = (props) => {
  const [informations, setInformation] = useState([]);
  const handleInformation = (information) => {
    setInformation(information);
    console.log(informations);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="../images/logo.png" alt="logo"/>
        Business Card Maker
      </header>
      <main className={styles.main}>
        <section className={styles.cardMaker}>
          <header className={styles.cardMakerHeader}>
            CardMaker
          </header>
          <div className={styles.cardTables}>
            {informations.length !== 0 && <CompleteCard information={informations} />}
            <CardTable onHandle={handleInformation}/>
          </div>
        </section>
        <aside className={styles.preview}>
          cardPreview
        </aside>
      </main>
      <footer className={styles.footer}>
        make world change by your code
      </footer>
    </div>
  )
}

export default CardMaker;