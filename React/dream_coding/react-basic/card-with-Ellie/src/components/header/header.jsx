import React from 'react';
import styles from "./header.module.css"

const Header = (props) => {
  return (
    <header className={styles.main}>
      <img src="../images/logo.png" alt="logo" />
      <p>Card Maker</p>
      </header>
  )
}

export default Header;