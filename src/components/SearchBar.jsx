// Search bar 

import React, { useState } from 'react';
import youtubePng from '../assets/youtube.png';

const Searchbar = ({ handleFormSubmit }) => {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (term) {
      handleFormSubmit(term);
    }
  };

  return (
    <>
      <h2>
        <img
          style={{ width: '300px', height: '200px', justifyContent: 'center' }}
          src={youtubePng}
          alt='youtube logo'
        ></img>
      </h2>
      <div>
        <form onSubmit={handleSubmit} >
          <div style={{textAlign: 'center'}}>
            <label htmlFor='search-bar'>Search a video</label>
            <input onChange={handleChange} name='search-bar' type='text' placeholder='Search...' />
          </div>
        </form>
      </div>
    </>
  );
};

export default Searchbar;