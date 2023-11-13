import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import Movie from './Movie';
import AddMovieForm from "./Addmovie";

Modal.setAppElement('#root');
function App() {
  const [movies, setMovies] = useState(Movie);
  const [filterText, setFilterText] = useState('');
  const [filterRating,setFilterRating]=useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showFilteredMovies, setShowFilteredMovies] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(movies,"movie")
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
}
  

  const handleFilterChange = (value) => {
    setFilterText(value);
  };
  const handleFilterRatingChange = (value) => {
    setFilterRating(value);
  };
    const handleFilterButtonClick = () => {
      const filteredItems = movies.filter((movie) =>{
      const titleMatch = movie.Title.toLowerCase().includes(filterText.toLowerCase())
      const ratingMatch = movie.Rating.toString() === filterRating.toString();
    
      return titleMatch && ratingMatch;
    });
    setFilteredMovies(filteredItems);
    setShowFilteredMovies(true);
  }
 const handleClick = () => {
      setIsModalOpen(!isModalOpen)
  }
  return (
    <>
    <div className="App">
     
      <div className='filter'>
      
      <Filter   onFilterChange={handleFilterChange} onFilterRate={handleFilterRatingChange}/>
     
      
      <button className='button1' onClick={handleFilterButtonClick}>Search</button>
      </div>
      {showFilteredMovies ? (
        <ul>
          {filteredMovies.map((movie, index) => (
            <li key={index}>
              <h2>{movie.Title}</h2>
              <p>{movie.Description}</p>
              <img src={movie.Poster} alt={movie.Title} />
              <p>Rating: {movie.Rating}</p>
            </li>
          ))}
        </ul>
      ) : null}
  
      <MovieList movies={movies}/>
   
      <button className='button' onClick= {handleClick} >Add Movie</button>

      <Modal
      isOpen={isModalOpen}
      onRequestClose={handleClick}
       contentLabel="Add Movie Modal"
      >
      <AddMovieForm  closeModal={handleClick} onAddMovie={handleAddMovie}   />
    </Modal>
  
    </div>
    </>
  );
}

export default App;
