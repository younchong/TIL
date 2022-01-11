import styles from "./card_add_form.module.css"
import React, { useState } from 'react';
import { useRef } from "react/cjs/react.development";
import ImageFileInput from "../image_file_input/image_file_input";
import Button from "../button/button";

const CardAddForm = ({onAdd, imageUploader}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ name: null, url: null });
  
  const onFileChange = (file) => {
    setFile({
      name: file.name,
      url: file.url,
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.name || "",
      fileURL:file.url || ''
    }
    onAdd(card);
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
  }

  return (
    <form className={styles.form} ref={formRef}>
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Name" 
        ref={nameRef}
        name="name"
      />
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Company" 
        ref={companyRef}
        name="company" 
      />
      <select 
        className={styles.select}
        placeholder="Theme"
        ref={themeRef}
        name="theme"
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Title" 
        ref={titleRef}
        name="title" 
      />
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Email" 
        ref={emailRef}
        name="email"
      />
      <textarea
        className={styles.textarea} 
        placeholder="Message" 
        ref={messageRef}
        name="message"
      />
      <div className={styles.fileInput}>
        <ImageFileInput 
          name={file.name}
          onFileChange={onFileChange}
          imageUploader={imageUploader}
        />
      </div>
        <Button name="Add" onClick={onSubmit}/>
    </form>
  )
}

export default CardAddForm;