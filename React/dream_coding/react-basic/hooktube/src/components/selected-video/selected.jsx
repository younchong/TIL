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
    <>
       <iframe id="player" type="text/html" width="640" height="360"
          src={url}
          frameBorder="0">
          </iframe>
      <h1>{selected.snippet.title}</h1>
    </>
    
  )
}

export default Selected;