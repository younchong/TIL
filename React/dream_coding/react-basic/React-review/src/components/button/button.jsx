import styles from "./button.module.css";

import React from 'react';

const Button = ({name, onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>{name}</button>
  )
}

export default Button;