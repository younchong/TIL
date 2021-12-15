import './app.css';
import Search from './components/search';
import Videos from './components/videos';
import React from 'react';

const App = (props) => {
  
  return (
    <>
      <Search />
      <ul className="video-list">
        <Videos />
      </ul>
      
    </>
  );
};

export default App;
