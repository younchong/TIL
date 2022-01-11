import styles from "./image_file_input.module.css";
import React, { memo, useState } from 'react';
import { useRef } from "react/cjs/react.development";

const ImageFileInput = memo(({ name, onFileChange, imageUploader }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  }

  const onChange = (e) => {
    setLoading(true);
    imageUploader.upload(e.currentTarget.files[0])
    .then(file=> {
      setLoading(false)
      onFileChange({name: file.original_filename, url: file.url})
    })
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
      {!loading && (
      <button 
        className={styles.button} 
        onClick={onButtonClick}
      >
      {name || "No file"}
      </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  )
});

export default ImageFileInput;