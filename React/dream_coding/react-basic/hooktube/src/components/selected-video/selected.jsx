import React from 'react';
import styles from './selected.module.css';

const Selected = ({selected}) => {
  let id;
  if (typeof selected.id === "string") {
    id = selected.id;
  } else {
    id = selected.id.videoId;
  }
  let url = "https://www.youtube.com/embed/" + id;
  
  return (
    <section className={styles.detail}>
      <iframe 
      id="player" 
      type="text/html" 
      width="100%" 
      height="500px"
      src={url}
      frameBorder="0"
      allowFullScreen
      ></iframe>
      <h1>{selected.snippet.title}</h1>
      <h2>{selected.snippet.channelTitle}</h2>
      <pre className={styles.description}>{selected.snippet.description}</pre>
    </section>
    
  )
}

export default Selected;