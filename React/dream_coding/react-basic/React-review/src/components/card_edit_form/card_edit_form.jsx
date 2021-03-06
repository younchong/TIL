import styles from "./card_edit_form.module.css"
import { React, useRef } from 'react';
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";

const CardEditForm = ({ card, updateCard, imageUploader, deleteCard }) => {
  const nameRef =useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const {name, company, theme, title, email, message, fileName, fileURL} = card;
  
  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url
    });
    };
  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value
    });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    deleteCard(card)
  }
  return (
    <form className={styles.form}>
      <input 
        className={styles.input} 
        type="text" 
        name="name" 
        value={name} 
        ref={nameRef}
        onChange={onChange} 
      />
      <input 
        className={styles.input} 
        type="text" 
        name="company" 
        value={company} 
        ref={companyRef}
        onChange={onChange} 
      />
      <select 
        className={styles.select}
        name="theme"
        ref={themeRef}
        value={theme}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input 
        className={styles.input} 
        type="text" 
        name="title" 
        value={title} 
        ref={titleRef}
        onChange={onChange} 
      />
      <input 
        className={styles.input} 
        type="text" 
        name="email" 
        value={email} 
        ref={emailRef}
        onChange={onChange} 
      />
      <textarea
        className={styles.textarea} 
        name="message" 
        value={message} 
        ref={messageRef}
        onChange={onChange} 
      />
      <div className={styles.fileInput}>
        <ImageFileInput
          name={fileName}
          onFileChange={onFileChange}
          imageUploader={imageUploader}
        />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  )
}

export default CardEditForm;