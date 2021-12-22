import React from 'react';
import styles from './search-nav.module.css';

const SearchNav = ({onSearch}) => {
  const inputRef = React.useRef();

  const handleSearch = (e) => {
    onSearch(inputRef.current.value);
    inputRef.current.value = "";
  }
  
  const onClick = () => {
    handleSearch();
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  const onBack = (e) => {
    e.preventDefault();
    console.log("back");
  }

  return (
    
    <div className={styles.form} >
      <i className="fas fa-bars icon"></i>
      <button className={styles.backButton} onClick={onBack}>
        <i className="fas fa-arrow-left icon"></i>
      </button>
      <img src="../images/logo.png"/>
      <input ref={inputRef} type="text" className={styles.input} onKeyPress={onKeyPress} />
      <button className="search-button" onClick={onClick} >Search</button>
      <i className="fas fa-search icon"></i>
      <i className="fas fa-microphone icon"></i>
  </div>
    
    
  )
}

export default SearchNav;