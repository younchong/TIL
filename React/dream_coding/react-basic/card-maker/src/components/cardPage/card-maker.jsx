import styles from "./card-maker.module.css";
import React from 'react';
import CardTable from "./card-table";

const CardMaker = (props) => {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="./images/logo" alt="logo"/>
        Business Card Maker
      </header>
      <main className={styles.main}>
        <section className={styles.cardMaker}>
          cardMaker
          <CardTable />
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