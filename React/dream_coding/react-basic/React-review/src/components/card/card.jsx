import styles from "./card.module.css";

import React from 'react';

const Card = ({card}) => {

  return (
    <input type="text" value={card.name} />
  )
}

export default Card;