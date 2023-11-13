import AddMovieForm from "./Addmovie";
const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
}
<button>
    <ReactModal
    isOpen={
    false
  }
 
onAfterOpen={
    <AddMovieForm onAddMovie={handleAddMovie}/>
}


>

  </ReactModal>
  </button>