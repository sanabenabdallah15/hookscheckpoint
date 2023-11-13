import './App.css'
import MovieCard from "./MovieCard";

function MovieList ({movies}){
    
    return(
        <div className="inline">
        {

        
        movies.map(
        (el,i)=>(
        <MovieCard  el={el} key={i} />
        )
    )
        }
     </div>
    )
    
}
export default MovieList;