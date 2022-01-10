import styles from "./image_file_input.module.css";
import React, { memo, useState } from 'react';
import { useRef } from "react/cjs/react.development";
import ImageUploader from "../../service/image_uploader";

const ImageFileInput = memo(({ onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  }
  const imageUploader = new ImageUploader();

  const onChange = (e) => {
    imageUploader.upload(e.target.files[0])
    .then(res => (
      onFileChange({
        name: res.original_filename,
        url: res.url
      })
    ));
    
  } 

  return (
    <div className={styles.container}>
      <input 
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        "Blank"
      </button>
    </div>
  )
});

export default ImageFileInput;