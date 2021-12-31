import React from 'react';
import styles from "./card-preview.module.css"

const CardPreview = ({data}) => {
  
  return (
    <div className={styles.main}>
      <aside className={styles.image}>
        <img src="../images/default_logo.png" />
      </aside>
      <section className={styles.information}>
        <h4>{data.Name}</h4>
        <span>{data.Company}</span>
        <span>{data.Title}</span>
        <span>{data.Message}</span>
      </section>
    </div>
  )
}

export default CardPreview;