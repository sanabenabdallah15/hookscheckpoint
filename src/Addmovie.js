import React, { useState } from 'react';
const AddMovieForm = ({ onAddMovie,buttonLabel ,closeModal}) => {
    const [Title, setTitle] = useState('');
    const [Rating, setRating] = useState('');
    const [Description, setDescription] = useState('');
    const [Poster,setPoster]=useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Create a movie object with the input data
      const newMovie = {
        Title,
        Rating,
        Description,
        Poster
      };

  
      // Call the parent component's function to add the movie
      onAddMovie(newMovie);
  
      // Clear the form fields
      setTitle('');
      setRating('');
      setDescription('');
      setPoster('');
      setTimeout(() => {
        closeModal();
      }, 0);
    };
    
   
    return (
    <div className='center'>
      <form onSubmit={handleSubmit}>
   
        <label >
          <h1>Title:</h1>
          <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} className='input'/>
        </label>
        <br />
        <label>
          <h1>Rating:</h1>
          <input type="text" value={Rating} onChange={(e) => setRating(e.target.value)}  className='input'/>
        </label>
        <br />
        <label>
         <h1> Description:</h1>
          <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)}  className='input'/>
        </label>
        <br />
        <label>
         <h1>Poster:</h1>
        <input type='src' value={Poster} onChange={(e) => setPoster(e.target.value)}  className='input'/>
        </label>
        <br />
        <button className='button2' type='submit'  >Add A Movie</button>
       
      </form>
      </div>
    );
  };
  
  export default AddMovieForm;