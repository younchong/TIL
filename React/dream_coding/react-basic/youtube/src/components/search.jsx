import React from 'react';

const Search = (props) => {

  return (
    <>
      <header className="search-header">
        <i className="fas fa-bars icon"></i>
        <i className="fas fa-arrow-left icon"></i>
        <img src="../images/logo.png"/>
        <input type="text" className="search-input" />
        <button className="search-button">Search</button>
        <i className="fas fa-search icon"></i>
        <i className="fas fa-microphone icon"></i>
      </header>
    </>
  )
};

export default Search;