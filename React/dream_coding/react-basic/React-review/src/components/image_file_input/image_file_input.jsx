import styles from "./image_file_input.module.css";

import React, { useState } from 'react';
import { useRef } from "react/cjs/react.development";

const ImageFileInput = ({onFileChange}) => {
  const inputRef = useRef();
  const [fileName, setFileName] = useState(null);
  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  }
  const onChange = (e) => {
    setFileName(e.target.files[0].name);
    onFileChange(e.target.files[0]);
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
        {fileName}
      </button>
    </div>
  )
}
export default ImageFileInput;