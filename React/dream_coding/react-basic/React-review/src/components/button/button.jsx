import styles from "./button.module.css";

import React from 'react';

const Button = ({onClick}) => {
  return (
    <button className={styles.button} onClick={onClick}>Add</button>
  )
}

export default Button;