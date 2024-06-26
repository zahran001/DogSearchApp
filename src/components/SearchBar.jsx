// Search bar 

import React, { useState } from 'react';
import youtubePng from '../assets/youtube.png';

// search bar needs to keep track of the user input
const Searchbar = ({ handleFormSubmit }) => {
  const [term, setTerm] = useState(''); // useState hook

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = term.trim();
    if (searchTerm) {
      const dogSearchQuery = searchTerm + 'dog';
      handleFormSubmit(dogSearchQuery);
    }
  };

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>
        <img
          style={{ width: '300px', height: '200px', justifyContent: 'center' }}
          src={youtubePng}
          alt='youtube logo'
        ></img>
      </h2>
      <div>
        <form onSubmit={handleSubmit} >
          <div style={{ textAlign: 'center' }}>
            <label htmlFor='search-bar'> Search a video </label>
            <input onChange={handleChange} name='search-bar' type='text' placeholder='Search' />
          </div>
        </form>
      </div>
    </>
  );
};

export default Searchbar;