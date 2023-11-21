import React from 'react';
import ReactStars from 'react-stars'

import './App.css';

function Filter({ onFilterChange,onFilterRate }) {



 const handleFilterChange = (e) => {
    const value = e.target.value;
    
    onFilterChange(value); // Pass the filter value to the parent component
  };
 
  const ratingChanged = (newRating) => {
    onFilterRate(newRating.toString());
  };

  return (
    <>
    <div className='form'>
      <input
        type="text"
        placeholder="Filter..."
        onChange={handleFilterChange}
      />
    </div>
   <ReactStars className='star'
    count={5}
    onChange={ratingChanged}
    size={35}
    
    color2={'#ffd700'} />

  
  </>
  );
}

export default Filter;
