import styles from "./card_edit_form.module.css"
import { React, useRef } from 'react';

const CardEditForm = ({card}) => {
  const nameRef =useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const {name, company, theme, title, email, message, fileName, fileURL} = card;
  
  function onChange() {
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
    </form>
  )
}

export default CardEditForm;