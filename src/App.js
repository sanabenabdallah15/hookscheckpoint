import React, { useState } from 'react';

import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import Movie from './Movie';
import AddMovieForm from "./Addmovie";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from './MoviePage';




function App() {
  const [movies, setMovies] = useState(Movie);
  const [filterText, setFilterText] = useState('');
  const [filterRating,setFilterRating]=useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [showFilteredMovies, setShowFilteredMovies] = useState(false);

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


  return (
    <Router>
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
            <h2>
          
                {movie.Title}
               
            </h2>
            <p>{movie.Description}</p>
            <img src={movie.Poster} alt={movie.Title} />
            <p>Rating: {movie.Rating}</p>
            <button  className="button4" onClick={() => window.open(movie.videoLink, '_blank')}>
                     Watch Trailer
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <Routes>
      <Route path="/" element={<MovieList movies={movies}/>} />
      </Routes>
      )}
      <Routes>
          <Route path="/" element={ <AddMovieForm   onAddMovie={handleAddMovie}   />} />

    </Routes>
   
    
    
    <Routes>

            <Route path="/MoviePage/:idfilm" element={<MoviePage movies={movies}/>} />
     </Routes>     

   
  
    </div>
    </>
    </Router>
  );
}

export default App;
