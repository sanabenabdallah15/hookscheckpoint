import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactStars from 'react-stars'
import './App.css'

const MoviePage = ({movies}) => {
    
  let {idfilm } = useParams();
  console.log(idfilm,"iddddd")
  const movie=movies.find((m) => m.id ===(idfilm));
  console.log("filmmmm",movie)

  return (
    <div>
    <h2>{movie.Title}</h2>
    <p>{movie.Description}</p>
    <img src={movie.Poster} alt={movie.Title} />
    <ReactStars className='stars1'
             count={5}
            value={movie.Rating}
             size={30}
            color2={'#ffd700'} />
    <button  className="button4" onClick={() => window.open(movie.videoLink, '_blank')}>
        Watch Trailer
    </button>
    
    <Link to="/"className='back'>Back to Home</Link>
  </div>
  );
};

export default MoviePage;