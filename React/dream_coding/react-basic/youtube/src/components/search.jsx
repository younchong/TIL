import React, { memo } from 'react';

const Search = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = (event) => {
    event.preventDefault();
    const result = inputRef.current.value;
    result && props.onSearch(result);
    formRef.current.reset();
  }
  return (
    <>
      <form ref={formRef} className="search-form" onClick={onSubmit}>
        <i className="fas fa-bars icon"></i>
        <i className="fas fa-arrow-left icon"></i>
        <img src="../images/logo.png"/>
        <input ref={inputRef} type="text" className="search-input" />
        <button className="search-button">Search</button>
        <i className="fas fa-search icon"></i>
        <i className="fas fa-microphone icon"></i>
      </form>
    </>
  )
});

export default Search;